import { Component, OnInit } from '@angular/core';
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

@Component({
  selector: 'app-display-roles',
  templateUrl: './display-roles.component.html',
  styleUrls: ['./display-roles.component.css']
})
export class DisplayRolesComponent implements OnInit {

  roles: Role[] = [];
  pagination: Pagination = new Pagination({ size: 7 });
  formSearch: FormControl = new FormControl();

  constructor(
    readonly modal: MatDialog,
    readonly onPaginate: PaginationService,
    readonly listRoles: ListRolesPaginatedService,
    readonly order: OrderRolesService
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
    this.listRoles.run(this.pagination);
    this.listRoles.done().subscribe(response => {
      this.roles = response.content;
      this.pagination.page = response.number     
      this.onPaginate.onBuild(new Paginate({
        currentPage: response.number,
        totalElements: response.totalElements,
        totalPages: response.totalPages
      }))
    })
    this.formSearch.valueChanges.pipe(debounceTime(700)).subscribe(keyword => {
      this.pagination.search = keyword
      this.listRoles.run(this.pagination)
    })
  }
}