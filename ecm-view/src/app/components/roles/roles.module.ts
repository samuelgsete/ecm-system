import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from 'src/app/shared/shared.module';
import { PaginateModule } from '../paginate/paginate.module';
import { UtilsModule } from 'src/app/utils/utils.module';

import { CreateRoleComponent } from './create-role/create-role.component';
import { DisplayRolesComponent } from './display-roles/display-roles.component';
import { UpdateRoleComponent } from './update-role/update-role.component';

import { ListRolesPaginatedResource } from 'src/app/resources/roles/list-roles-paginated.resource';
import { ListRolesPaginatedService } from 'src/app/usecases/roles/list-roles-paginated.service';
import { CreateRoleResource } from 'src/app/resources/roles/create-role.resource';
import { CreateRoleService } from 'src/app/usecases/roles/create-role.service';
import { UpdateRoleResource } from 'src/app/resources/roles/update-role-resource';
import { UpdateRoleService } from 'src/app/usecases/roles/update-role.service';
import { SelectRoleComparatorService } from 'src/app/usecases/roles/select-role-comparator.service';
import { OrderRolesService } from 'src/app/usecases/roles/order-roles.service';
import { DeleteRoleResource } from 'src/app/resources/roles/delete-role.resource';
import { DeleteRoleService } from 'src/app/usecases/roles/delete-role.service';

@NgModule({
  declarations: [
    CreateRoleComponent,
    DisplayRolesComponent,
    UpdateRoleComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    PaginateModule,
    UtilsModule
  ],
  providers: [
    ListRolesPaginatedResource,
    ListRolesPaginatedService,
    CreateRoleResource,
    CreateRoleService,
    UpdateRoleResource,
    UpdateRoleService,
    SelectRoleComparatorService,
    OrderRolesService,
    DeleteRoleResource,
    DeleteRoleService
  ],
})
export class RolesModule {}