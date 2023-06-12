import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { debounceTime } from 'rxjs';

import { Congregation } from 'src/app/models/congregation.entity';
import { Pagination } from 'src/app/models/pagination.entity';
import { ListCongregationsPaginatedService } from 'src/app/usecases/congregations/list-congregations-paginated.service';
import { CreateCongregrationComponent } from '../create-congregration/create-congregration.component';
import { UpdateCongregationComponent } from '../update-congregation/update-congregation.component';

@Component({
  selector: 'app-display-congregations',
  templateUrl: './display-congregations.component.html',
  styleUrls: ['./display-congregations.component.css']
})
export class DisplayCongregationsComponent implements OnInit {

  protected congregations: Congregation[] = [];
  protected pagination: Pagination = new Pagination({ size: 8 });
  protected totalElements: number = 0;
  protected formSearch: FormControl = new FormControl();

  public constructor(
    protected readonly modal: MatDialog,
    protected readonly route: ActivatedRoute,
    protected readonly router: Router,
    protected readonly listCongregations: ListCongregationsPaginatedService
  ) {}

  public openCreateCongregationComponent(): void {
    this.modal.open(CreateCongregrationComponent);
    this.modal.afterAllClosed.subscribe(() => {
      this.listCongregations.run(this.pagination);
    });
  }

  public openUpdateCongregationComponent(congregation: Congregation): void {
    this.modal.open(UpdateCongregationComponent, {
      data: congregation
    })

    this.modal.afterAllClosed.subscribe(() => {
      this.listCongregations.run(this.pagination);
    })
  }

  public ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      let currentPage = params['currentPage'];
      let search = params['search'] || '';
      this.pagination.page = currentPage;
      this.pagination.search = search;
      this.listCongregations.run(this.pagination);
    })

    this.listCongregations.done().subscribe(response => {
      this.congregations = response.content;
      this.totalElements = response.totalElements;
      this.router.navigate([], { 
        queryParams: {  currentPage: response.number, numberOfPages: response.totalPages },
        queryParamsHandling: 'merge'
      });
    })
    
    this.formSearch.valueChanges.pipe(debounceTime(700)).subscribe(keyword => {
      this.router.navigate([], { 
        queryParams: { search: keyword.toLowerCase(), currentPage: 0 },
        queryParamsHandling: 'merge'
      });
    });
  }
}