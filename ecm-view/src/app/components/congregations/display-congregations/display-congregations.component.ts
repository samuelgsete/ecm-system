import { Component, OnInit } from '@angular/core';
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
import { SelectOrUnselecteCongregationService } from 'src/app/usecases/congregations/select-or-unselect-congregation.service';
import { CountCongregationsSelectedsService } from 'src/app/usecases/congregations/count-congegations-selecteds.service';
import { SelectOrUnselectAllCongregationsService } from 'src/app/usecases/congregations/select-or-unselect-all-congregations.service';
import { DeleteManyCongregationService } from 'src/app/usecases/congregations/delete-many-congregations.service';

@Component({
  selector: 'app-display-congregations',
  templateUrl: './display-congregations.component.html',
  styleUrls: ['./display-congregations.component.css']
})
export class DisplayCongregationsComponent implements OnInit {

  congregations$!: Observable<Congregation[]>;
  pagination: Pagination = new Pagination()
  searchValue: string = '';
  countSelecteds: number = 0;
   
  constructor(
    protected readonly titleService: Title,
    protected readonly modal: MatDialog,
    protected readonly listCongregations: ListCongregationsPaginatedService,
    protected readonly onDelete: DeleteCongregationService,
    protected readonly deleteMany: DeleteManyCongregationService,
    protected readonly order: OrderCongregationsService,
    protected readonly updateMetrics: DisplayMetricsService,
    protected readonly onEmit: EmitCredentialsByCongregationService,
    protected readonly selectOrUnselect: SelectOrUnselecteCongregationService,
    protected readonly selectOrUnselectAll: SelectOrUnselectAllCongregationsService,
    protected readonly count: CountCongregationsSelectedsService
  ) {
  }

  onLoad(): void {
    this.congregations$ = this.listCongregations.run(this.pagination);
  }

  changePage(page: number) :void {
    this.pagination.page = page;
    this.onLoad();
  }

  onSelect(id: string, selected: boolean): void {
    this.selectOrUnselect.run(id, selected);
  }

  onSelectAll(isSelected: boolean): void {
    this.selectOrUnselectAll.run(isSelected);
  }

  onSearch(keyword: string): void {
    this.searchValue = keyword;
    this.pagination.search = keyword;
    this.onLoad();
  }

  changeOrdination(ordination: string): void {
    this.pagination.ordination = ordination;
    this.onLoad();
  }

  someSelecteds(): boolean {
    return this.countSelecteds > 0 && this.countSelecteds < this.pagination.total;
  }

  allSelecteds(): boolean {
    return this.countSelecteds == this.pagination.total;
  }

  deleteSelecteds(): void {
    this.deleteMany.run();
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
    this.onEmit.done().subscribe(htmlContent => {
      let newWindow = open();
      newWindow?.document.write(htmlContent || "ERRO 404: Not Found");
    })
    // Ao selecionar ou deselecionar uma congregação
    this.selectOrUnselect.isDone.subscribe(response => {
      this.count.run();
      this.onLoad();
    });
    // Contabilia a quantidade de congregações selecionadas
    this.count.run();
    this.count.isDone.subscribe(response => {
      this.countSelecteds = response;
    })
    // Ao selecionar ou deselecionar todas as congregações
    this.selectOrUnselectAll.isDone.subscribe(() => {
      this.count.run();
      this.onLoad();
    })
    // Ao delete as congregações selecionadas
    this.deleteMany.isDone.subscribe(() => {
      this.count.run();
      this.onLoad();
      this.updateMetrics.onUpdate();
    })
  }
}