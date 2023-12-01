import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { debounceTime } from 'rxjs';

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
import { EmitCredentialsByCongregationService } from 'src/app/usecases/credentials/emit-credentials-bycongregation.service';

@Component({
  selector: 'app-display-congregations',
  templateUrl: './display-congregations.component.html',
  styleUrls: ['./display-congregations.component.css']
})
export class DisplayCongregationsComponent implements OnInit {

  congregations: Congregation[] = []
  pagination: Pagination = new Pagination()
  formSearch: FormControl = new FormControl()
  
  constructor(
    protected readonly titleService: Title,
    protected readonly modal: MatDialog,
    protected readonly onPaginate: PaginationService,
    protected readonly listCongregations: ListCongregationsPaginatedService,
    protected readonly onDelete: DeleteCongregationService,
    protected readonly order: OrderCongregationsService,
    protected readonly updateMetrics: DisplayMetricsService,
    protected readonly onEmit: EmitCredentialsByCongregationService
  ) {}

  nextPage(page: number): void {
    this.pagination.page = page;
    this.listCongregations.run(this.pagination);
  }

  openCreateCongregationComponent(): void {
    this.modal.open(CreateCongregrationComponent);
    this.modal.afterAllClosed.subscribe(() => {
      this.listCongregations.run(this.pagination);
    });
  }

  openUpdateCongregationComponent(congregation: Congregation): void {
    this.modal.open(UpdateCongregationComponent, {
      data: congregation
    })

    this.modal.afterAllClosed.subscribe(() => {
      this.listCongregations.run(this.pagination);
    })
  }

  ngOnInit(): void {
    this.titleService.setTitle('Gerenciar congregações');
    this.listCongregations.run(this.pagination);
    this.listCongregations.done().subscribe(response => {
      this.congregations = response.content;
      this.pagination.page = response.number
      this.pagination.total = response.totalElements
      this.onPaginate.onBuild(new Paginate({
        currentPage: response.number,
        totalElements: response.totalElements,
        totalPages: response.totalPages
      }))
    })
    
    this.formSearch.valueChanges.pipe(debounceTime(900)).subscribe(keyword => {
      this.listCongregations.run(new Pagination({ search: keyword.toLowerCase() }));
    })

    this.onDelete.done().subscribe(congregationDeleted => {
      this.updateMetrics.run();
      this.listCongregations.run(new Pagination());
    })

    this.onEmit.done().subscribe(htmlContent => {
      let newWindow = open();
      newWindow?.document.write(htmlContent || "ERRO 404: Not Found");
    })
  }
}