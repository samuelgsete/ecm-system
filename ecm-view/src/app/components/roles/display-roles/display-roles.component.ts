import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';

import { Role } from 'src/app/models/role.entity';
import { Pagination } from 'src/app/models/pagination.entity';
import { ListRolesPaginatedService } from 'src/app/usecases/roles/list-roles-paginated.service';
import { UpdateRoleComponent } from '../update-role/update-role.component';
import { CreateRoleComponent } from '../create-role/create-role.component';
import { OrderRolesService } from 'src/app/usecases/roles/order-roles.service';
import { DeleteRoleService } from 'src/app/usecases/roles/delete-role.service';
import { DisplayMetricsService } from 'src/app/usecases/metrics/display-metrics.service';
import { EmitCredentialsByRoleService } from 'src/app/usecases/credentials/emit-credentials-by-role.service';
import { SelectOrUnselectRoleService } from 'src/app/usecases/roles/select-or-unselect-role.service';
import { CountRolesSelectedsService } from 'src/app/usecases/roles/count-roles-selecteds.service';

@Component({
  selector: 'app-display-roles',
  templateUrl: './display-roles.component.html',
  styleUrls: ['./display-roles.component.css']
})
export class DisplayRolesComponent implements OnInit {

  roles$!: Observable<Role[]>
  pagination: Pagination = new Pagination();
  searchValue: string = '';
  countSelecteds: number = 0;
   
  constructor(
    protected readonly titleService: Title,
    protected readonly modal: MatDialog,
    protected readonly listRoles: ListRolesPaginatedService,
    protected readonly onDelete: DeleteRoleService,
    protected readonly order: OrderRolesService,
    protected readonly updateMetrics: DisplayMetricsService,
    protected readonly onEmit: EmitCredentialsByRoleService,
    protected readonly selectOrUnselect: SelectOrUnselectRoleService,
    protected readonly count: CountRolesSelectedsService
  ) {}

  onLoad(): void {
    this.roles$ = this.listRoles.run(this.pagination);
  }

  changePage(nextPage: number): void {
    this.pagination.page = nextPage;
    this.onLoad();
  }

  changeOrdination(ordination: string): void {
    this.pagination.ordination = ordination;
    this.onLoad();
  }

  onSelectOrUnselect(id: string, isSelected: boolean): void {
    this.selectOrUnselect.run(id, isSelected)
  }

  openUpdateRoleComponent(role: Role): void {
    this.modal.open(UpdateRoleComponent, {
      data: role
    })
    this.modal.afterAllClosed.subscribe(() => {
      this.onLoad();
    })
  }

  deleteSelecteds(): void {
    alert('On Delete Roles Selecteds...');
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
    // Carrega os cargos cadastrados
    this.onLoad();
    // Configura o título da página
    this.titleService.setTitle('Gerenciar cargos');
    // Ao excluir o cargo
    this.onDelete.done().subscribe(roleDeleted => {
      this.updateMetrics.onUpdate();
      this.listRoles.run(new Pagination());
    });
    // Gera as credenciais de membro por congregação
    this.onEmit.done().subscribe(htmlContent => {
      let newWindow = open();
      newWindow?.document.write(htmlContent || "ERRO 404: Not Found");
    })
    // Ao selecionar ou deselecionar um cargo
    this.selectOrUnselect.isDone.subscribe(response => {
      this.count.run();
    })
    // Retorna a quantidade de cargos selecionados
    this.count.run();
    this.count.isDone.subscribe(response => {
      this.countSelecteds = response;
    })
  }
}