import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';

import { Pagination } from 'src/app/models/pagination.entity';
import { Role } from 'src/app/models/role.entity';
import { ListRolesPaginatedService } from 'src/app/usecases/roles/list-roles-paginated.service';
import { UpdateRoleComponent } from '../update-role/update-role.component';
import { CreateRoleComponent } from '../create-role/create-role.component';
import { OrderRolesService } from 'src/app/usecases/roles/order-roles.service';
import { PaginationService } from '../../paginate/pagination/pagination.service';
import { DeleteRoleService } from 'src/app/usecases/roles/delete-role.service';
import { DisplayMetricsService } from 'src/app/usecases/metrics/display-metrics.service';
import { EmitCredentialsByRoleService } from 'src/app/usecases/credentials/emit-credentials-by-role.service';

@Component({
  selector: 'app-display-roles',
  templateUrl: './display-roles.component.html',
  styleUrls: ['./display-roles.component.css']
})
export class DisplayRolesComponent implements OnInit {

  roles$!: Observable<Role[]>
  pagination: Pagination = new Pagination();
  searchValue: string = '';
   
  constructor(
    protected readonly titleService: Title,
    protected readonly modal: MatDialog,
    protected readonly onPaginate: PaginationService,
    protected readonly listRoles: ListRolesPaginatedService,
    protected readonly onDelete: DeleteRoleService,
    protected readonly order: OrderRolesService,
    protected readonly updateMetrics: DisplayMetricsService,
    protected readonly onEmit: EmitCredentialsByRoleService
  ) {
    this.order.setComponent(this);
  }

  onLoad(): void {
    this.roles$ = this.listRoles.run(this.pagination);
  }

  nextPage(page: number): void {
    this.pagination.page = page;
    this.onLoad();
  }

  openUpdateRoleComponent(role: Role): void {
    this.modal.open(UpdateRoleComponent, {
      data: role
    })
    this.modal.afterAllClosed.subscribe(() => {
      this.onLoad();
    })
  }

  openCreateRoleComponent(): void {
    this.modal.open(CreateRoleComponent);
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
    this.titleService.setTitle('Gerenciar cargos');
    this.onDelete.done().subscribe(roleDeleted => {
      this.updateMetrics.onUpdate();
      this.listRoles.run(new Pagination());
    });

    this.onEmit.done().subscribe(htmlContent => {
      let newWindow = open();
      newWindow?.document.write(htmlContent || "ERRO 404: Not Found");
    })
  }
}