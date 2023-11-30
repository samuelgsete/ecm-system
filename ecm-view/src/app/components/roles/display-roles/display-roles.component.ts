import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { debounceTime } from 'rxjs';

import { Pagination } from 'src/app/models/pagination.entity';
import { Role } from 'src/app/models/role.entity';
import { ListRolesPaginatedService } from 'src/app/usecases/roles/list-roles-paginated.service';
import { UpdateRoleComponent } from '../update-role/update-role.component';
import { CreateRoleComponent } from '../create-role/create-role.component';
import { OrderRolesService } from 'src/app/usecases/roles/order-roles.service';
import { PaginationService } from '../../paginate/pagination/pagination.service';
import { Paginate } from 'src/app/models/paginate.entity';
import { DeleteRoleService } from 'src/app/usecases/roles/delete-role.service';
import { DisplayMetricsService } from 'src/app/usecases/metrics/display-metrics.service';

@Component({
  selector: 'app-display-roles',
  templateUrl: './display-roles.component.html',
  styleUrls: ['./display-roles.component.css']
})
export class DisplayRolesComponent implements OnInit {

  roles: Role[] = [];
  pagination: Pagination = new Pagination();
  formSearch: FormControl = new FormControl();

  constructor(
    protected readonly titleService: Title,
    protected readonly modal: MatDialog,
    protected readonly onPaginate: PaginationService,
    protected readonly listRoles: ListRolesPaginatedService,
    protected readonly onDelete: DeleteRoleService,
    protected readonly order: OrderRolesService,
    protected readonly updateMetrics: DisplayMetricsService
  ) {}

  nextPage(page: number): void {
    this.pagination.page = page;
    this.listRoles.run(this.pagination);
  }

  openUpdateRoleComponent(role: Role): void {
    this.modal.open(UpdateRoleComponent, {
      data: role
    })
    this.modal.afterAllClosed.subscribe(() => {
      this.listRoles.run(this.pagination);
    })
  }

  openCreateRoleComponent(): void {
    this.modal.open(CreateRoleComponent);
    this.modal.afterAllClosed.subscribe(() => {
      this.listRoles.run(this.pagination);
    })
  }

  ngOnInit(): void {
    this.titleService.setTitle('Gerenciar cargos');
    this.listRoles.run(this.pagination);
    this.listRoles.done().subscribe(response => {
      this.roles = response.content;
      console.log(response);
      this.pagination.page = response.number
      this.pagination.total = response.totalElements 
      this.onPaginate.onBuild(new Paginate({
        currentPage: response.number,
        totalElements: response.totalElements,
        totalPages: response.totalPages
      }))
    })

    this.formSearch.valueChanges.pipe(debounceTime(700)).subscribe(keyword => {
      this.pagination.search = keyword
      this.listRoles.run(new Pagination({ search: keyword.toLowerCase() }))
    })

    this.onDelete.done().subscribe(roleDeleted => {
      this.updateMetrics.run();
      this.listRoles.run(new Pagination());
    });
  }
}