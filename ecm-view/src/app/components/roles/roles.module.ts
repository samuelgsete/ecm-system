import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from 'src/app/shared/shared.module';
import { PaginateModule } from '../paginate/paginate.module';
import { ListRolesPaginatedResource } from 'src/app/resources/roles/list-roles-paginated.resource';
import { ListRolesPaginatedService } from 'src/app/usecases/roles/list-roles-paginated.service';
import { CreateRoleComponent } from './create-role/create-role.component';
import { CreateRoleResource } from 'src/app/resources/roles/create-role.resource';
import { CreateRoleService } from 'src/app/usecases/roles/create-role.service';
import { DisplayRolesComponent } from './display-roles/display-roles.component';
import { UpdateRoleComponent } from './update-role/update-role.component';
import { FindOneRoleResource } from 'src/app/resources/roles/find-one-role.resource';
import { FindOneRoleService } from 'src/app/usecases/roles/find-one-role.service';
import { UpdateRoleResource } from 'src/app/resources/roles/update-role-resource';
import { UpdateRoleService } from 'src/app/usecases/roles/update-role.service';
import { SelectRoleComparatorService } from 'src/app/usecases/roles/select-role-comparator.service';
import { OrdinationsRolesService } from 'src/app/usecases/roles/ordinations-roles.service';

@NgModule({
  declarations: [
    CreateRoleComponent,
    DisplayRolesComponent,
    UpdateRoleComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    PaginateModule
  ],
  providers: [
    FindOneRoleResource,
    FindOneRoleService,
    ListRolesPaginatedResource,
    ListRolesPaginatedService,
    CreateRoleResource,
    CreateRoleService,
    UpdateRoleResource,
    UpdateRoleService,
    SelectRoleComparatorService,
    OrdinationsRolesService
  ],
})
export class RolesModule {}