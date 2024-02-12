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

@Component({
  selector: 'app-display-congregations',
  templateUrl: './display-congregations.component.html',
  styleUrls: ['./display-congregations.component.css']
})
export class DisplayCongregationsComponent implements OnInit {

  congregations$!: Observable<Congregation[]>;
  pagination: Pagination = new Pagination()
  searchValue: string = '';
  
  constructor(
    protected readonly titleService: Title,
    protected readonly modal: MatDialog,
    protected readonly listCongregations: ListCongregationsPaginatedService,
    protected readonly onDelete: DeleteCongregationService,
    protected readonly order: OrderCongregationsService,
    protected readonly updateMetrics: DisplayMetricsService,
    protected readonly onEmit: EmitCredentialsByCongregationService,
  ) {
  }

  onLoad(): void {
    this.congregations$ = this.listCongregations.run(this.pagination);
  }

  changePage(page: number) :void {
    this.pagination.page = page;
    this.onLoad();
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

  openCreateCongregationComponent(): void {
    this.modal.open(CreateCongregrationComponent);
    this.modal.afterAllClosed.subscribe(() => {
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
  }
}