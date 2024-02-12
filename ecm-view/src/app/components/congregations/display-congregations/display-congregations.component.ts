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
import { PaginationService } from '../../paginate/pagination/pagination.service';
import { Paginate } from 'src/app/models/paginate.entity';
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
    protected readonly onPaginate: PaginationService,
    protected readonly listCongregations: ListCongregationsPaginatedService,
    protected readonly onDelete: DeleteCongregationService,
    protected readonly order: OrderCongregationsService,
    protected readonly updateMetrics: DisplayMetricsService,
    protected readonly onEmit: EmitCredentialsByCongregationService
  ) {
    this.order.setComponent(this);
  }

  onLoad(): void {
    this.congregations$ = this.listCongregations.run(this.pagination);
  }

  nextPage(page: number): void {
    this.pagination.page = page;
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

  onSearch(keyword: string) {
    this.searchValue = keyword;
    this.pagination.search = this.searchValue;
    this.onLoad();
  }

  ngOnInit(): void {
    this.onLoad();
    this.titleService.setTitle('Gerenciar congregações');
       
    this.onDelete.done().subscribe(congregationDeleted => {
      this.updateMetrics.onUpdate();
      this.onLoad();
    })

    this.onEmit.done().subscribe(htmlContent => {
      let newWindow = open();
      newWindow?.document.write(htmlContent || "ERRO 404: Not Found");
    })
  }
}