import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { debounceTime } from 'rxjs';

import { Pagination } from 'src/app/models/pagination.entity';
import { Role } from 'src/app/models/role.entity';
import { ListRolesPaginatedService } from 'src/app/usecases/roles/list-roles-paginated.service';
import { UpdateRoleComponent } from '../update-role/update-role.component';
import { CreateRoleComponent } from '../create-role/create-role.component';

@Component({
  selector: 'app-display-roles',
  templateUrl: './display-roles.component.html',
  styleUrls: ['./display-roles.component.css']
})
export class DisplayRolesComponent implements OnInit {

  protected roles: Role[] = [];
  protected pagination: Pagination = new Pagination({ size: 7 });
  protected totalElements: number = 0;
  protected formSearch: FormControl = new FormControl();

  public constructor(
    protected readonly modal: MatDialog,
    protected readonly route: ActivatedRoute,
    protected readonly router: Router,
    protected readonly listRoles: ListRolesPaginatedService
  ) {}

  public openUpdateRoleComponent(role: Role): void {
    this.modal.open(UpdateRoleComponent, {
      data: role
    })

    this.modal.afterAllClosed.subscribe(() => {
      this.listRoles.run(this.pagination);
    })
  }

  public openCreateRoleComponent(): void {
    this.modal.open(CreateRoleComponent);
    this.modal.afterAllClosed.subscribe(() => {
      this.listRoles.run(this.pagination);
    })
  }

  public ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      let currentPage = params['currentPage'];
      let search = params['search'] || '';
      this.pagination.page = currentPage;
      this.pagination.search = search;
      this.listRoles.run(this.pagination);
    })

    this.listRoles.done().subscribe(response => {
      this.roles = response.content;
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