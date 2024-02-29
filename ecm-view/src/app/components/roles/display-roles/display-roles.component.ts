import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
import { CountRolesService } from 'src/app/usecases/roles/count-roles.service';
import { CountElements } from 'src/app/utils/models/count-elements.entity';
import { SelectOrUnselectAllRolesService } from 'src/app/usecases/roles/select-or-unselect-all-roles.service';
import { DeleteManyRolesService } from 'src/app/usecases/roles/delete-many-roles.service';

@Component({
  selector: 'app-display-roles',
  templateUrl: './display-roles.component.html',
  styleUrls: ['./display-roles.component.css']
})
export class DisplayRolesComponent implements OnInit {

  roles$!: Observable<Role[]>
  pagination: Pagination = new Pagination();
  countElements = new CountElements();
   
  constructor(
    protected readonly route: ActivatedRoute,
    protected readonly titleService: Title,
    protected readonly modal: MatDialog,
    protected readonly listRoles: ListRolesPaginatedService,
    protected readonly onDelete: DeleteRoleService,
    protected readonly order: OrderRolesService,
    protected readonly updateMetrics: DisplayMetricsService,
    protected readonly onEmit: EmitCredentialsByRoleService,
    protected readonly selectOrUnselect: SelectOrUnselectRoleService,
    protected readonly selectOrUnselectAll: SelectOrUnselectAllRolesService,
    protected readonly deleteMany: DeleteManyRolesService,
    protected readonly onCount: CountRolesService
  ) {}

  onLoad(): void {
    this.roles$ = this.listRoles.run(this.pagination);
  }

  changePage(nextPage: number): void {
    this.pagination.pageCurrent = nextPage;
    this.onLoad();
  }

  changeSizePage(size: number): void {
    this.pagination.pageCurrent = 0;
    this.pagination.pageSize = size;
    this.onLoad();
  }

  changeOrdination(ordination: string): void {
    this.pagination.ordination = ordination;
    this.onLoad();
  }

  onSelectOrUnselect(id: string, isSelected: boolean): void {
    this.selectOrUnselect.run(id, isSelected)
  }

  onSelectOrUnselectAll(isSelected: boolean): void {
    this.selectOrUnselectAll.run(isSelected);
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
    this.deleteMany.run();
  }

  openCreateRoleComponent(): void {
    this.modal.open(CreateRoleComponent);
    this.modal.afterAllClosed.subscribe(() => {
      this.onLoad();
      this.updateMetrics.onUpdate();
    })
  }

  onSearch(keyword: string) {
    this.pagination.search = keyword.toLowerCase()
    this.pagination.pageCurrent = 0;
    this.onLoad();
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      const search = params['search'] || '';
      const ordination = params['ordination'] || 'by_name_asc';
      const pageCurrent = params['page_number'] || 0;
      const pageSize = params['page_size'] || 10;
    
      this.pagination.search = search;
      this.pagination.ordination = ordination;
      this.pagination.pageCurrent = parseInt(pageCurrent);
      this.pagination.pageSize = parseInt(pageSize);
    })

    // Carrega os cargos cadastrados
    this.onLoad();
    // Configura o título da página
    this.titleService.setTitle('Gerenciar cargos');
    // Ao excluir o cargo
    this.onDelete.done().subscribe(roleDeleted => {
      this.updateMetrics.onUpdate();
      this.onLoad();
    });
    // Ao delete os cargos selecionados
    this.deleteMany.isDone.subscribe(() => {
      this.updateMetrics.onUpdate();
      this.onLoad();
      this.onCount.run();
    })
    // Gera as credenciais de membro por congregação
    this.onEmit.done().subscribe(htmlContent => {
      let newWindow = open();
      newWindow?.document.write(htmlContent || "ERRO 404: Not Found");
    })
    // Ao selecionar ou deselecionar um cargo
    this.selectOrUnselect.isDone.subscribe(response => {
      this.onCount.run();
    })
    // Ao selecionar ou deslecionar todos os cargos
    this.selectOrUnselectAll.isDone.subscribe(() => {
      this.onCount.run();
      this.onLoad();
    })
    // Retorna a quantidade de cargos selecionados
    this.onCount.run();
    this.onCount.isDone.subscribe(response => {
      this.countElements = response;
    })
  }
}