import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';

import { Congregation } from 'src/app/models/congregation.entity';
import { Pagination } from 'src/app/models/pagination.entity';
import { ListCongregationsPaginatedService } from 'src/app/usecases/congregations/list-congregations-paginated.service';
import { CreateCongregrationComponent } from '../create-congregration/create-congregration.component';
import { UpdateCongregationComponent } from '../update-congregation/update-congregation.component';
import { OrderCongregationsService } from 'src/app/usecases/congregations/order-congregations.service';
import { DeleteCongregationService } from 'src/app/usecases/congregations/delete-congregation.service';
import { DisplayMetricsService } from 'src/app/usecases/metrics/display-metrics.service';
import { EmitCredentialsByCongregationService } from 'src/app/usecases/credentials/emit-credentials-by-congregation.service';
import { SelectOrUnselectCongregationService } from 'src/app/usecases/congregations/select-or-unselect-congregation.service';
import { CountCongregationsService } from 'src/app/usecases/congregations/count-congegations.service';
import { SelectOrUnselectAllCongregationsService } from 'src/app/usecases/congregations/select-or-unselect-all-congregations.service';
import { DeleteManyCongregationService } from 'src/app/usecases/congregations/delete-many-congregations.service';
import { DisplayMembersByCongregationService } from 'src/app/usecases/members/display-members-by-congregation.service';
import { CountElements } from 'src/app/utils/models/count-elements.entity';

@Component({
  selector: 'app-display-congregations',
  templateUrl: './display-congregations.component.html',
  styleUrls: ['./display-congregations.component.css']
})
export class DisplayCongregationsComponent implements OnInit {

  congregations$!: Observable<Congregation[]>;
  pagination: Pagination = new Pagination();
  countElements = new CountElements();
   
  constructor(
    protected readonly route: ActivatedRoute,
    protected readonly titleService: Title,
    protected readonly modal: MatDialog,
    protected readonly listCongregations: ListCongregationsPaginatedService,
    protected readonly onDelete: DeleteCongregationService,
    protected readonly deleteMany: DeleteManyCongregationService,
    protected readonly order: OrderCongregationsService,
    protected readonly updateMetrics: DisplayMetricsService,
    protected readonly emitCredentials: EmitCredentialsByCongregationService,
    protected readonly selectOrUnselectOne: SelectOrUnselectCongregationService,
    protected readonly selectOrUnselectAll: SelectOrUnselectAllCongregationsService,
    protected readonly onCount: CountCongregationsService,
    protected readonly displayMembers: DisplayMembersByCongregationService
  ) {
  }

  onLoad(): void {
    this.congregations$ = this.listCongregations.run(this.pagination);
  }

  changePage(nextPage: number): void {
    this.pagination.pageCurrent = nextPage;
    this.onLoad();
    window.scrollTo({ top: 60, behavior: 'smooth' });
  }

  changeSizePage(size: number): void {
    this.pagination.pageCurrent = 0;
    this.pagination.pageSize = size;
    this.onLoad();
  }

  changeOrdination(ordination: string): void {
    this.pagination.ordination = ordination;
    this.pagination.search = '';
    this.onLoad();
  }

  handleEmitCredentialsOfCongregation(name: string): void {
    this.emitCredentials.run(name);
  }

  handleSelectOrUnselectOne(id: string, selected: boolean): void {
    this.selectOrUnselectOne.run(id, selected);
  }

  handleSelectOrUnselectAll(isSelected: boolean): void {
    this.selectOrUnselectAll.run(isSelected);
  }

  handleSearch(keyword: string): void {
    this.pagination.search = keyword.toLowerCase()
    this.pagination.pageCurrent = 0;
    this.onLoad();
  }

  handleDeleteMany(): void {
    this.deleteMany.run();
  }

  handleDisplayMembers(congregation: string): void {
    this.displayMembers.run(congregation);
  }

  openCreateCongregationComponent(): void {
    this.modal.open(CreateCongregrationComponent);
    this.modal.afterAllClosed.subscribe(() => {
      this.updateMetrics.onUpdate();
      this.onLoad();
    });
  }

  openUpdateCongregationComponent(congregation: Congregation): void {
    this.modal.open(UpdateCongregationComponent, {
      data: congregation
    })

    this.modal.afterAllClosed.subscribe(() => {
      this.onLoad();
    })
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      const search = params['search'] || '';
      const ordination = params['ordination'] || 'by_name_asc';
      const pageCurrent = params['page_number'] || 0;
      const pageSize = params['page_size'] || 10;
    
      this.pagination.search = search;
      this.pagination.ordination = ordination;
      this.pagination.pageCurrent = parseInt(pageCurrent);
      this.pagination.pageSize = parseInt(pageSize);
    });
    // Carrega as congregações
    this.onLoad();
    // Configura o título da página
    this.titleService.setTitle('Gerenciar congregações');
    // Recagerra os dados e atualiza as métricas após uma congregação ser removida
    this.onDelete.done().subscribe(congregationDeleted => {
      this.updateMetrics.onUpdate();
      this.onLoad();
    })
    // Obtém um conteúdo html com as credenciais e os renderiza em uma nova aba do navegador
    this.emitCredentials.done().subscribe(htmlContent => {
      let newWindow = open();
      newWindow?.document.write(htmlContent || "ERRO 404: Not Found");
    })
    // Ao selecionar ou deselecionar uma congregação
    this.selectOrUnselectOne.isDone.subscribe(response => {
      this.onCount.run();
      this.onLoad();
    });
    // Contabilia a quantidade de congregações selecionadas
    this.onCount.run();
    this.onCount.isDone.subscribe(response => {
      this.countElements = response;
    })
    // Ao selecionar ou deselecionar todas as congregações
    this.selectOrUnselectAll.isDone.subscribe(() => {
      this.onCount.run();
      this.onLoad();
    })
    // Ao delete as congregações selecionadas
    this.deleteMany.isDone.subscribe(() => {
      this.onCount.run();
      this.onLoad();
      this.updateMetrics.onUpdate();
    });
    /* Ao exibir a relação de membros da congregação */
    this.displayMembers.done.subscribe(htmlContent => {
      let newWindow = open();
      newWindow?.document.write(htmlContent);
    });
  }
}