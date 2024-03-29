import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from 'src/app/shared/shared.module';
import { PaginateModule } from '../paginate/paginate.module';
import { UtilsModule } from 'src/app/utils/utils.module';
import { UiModule } from 'src/app/ui/ui.module';

import { CreateRoleComponent } from './create-role/create-role.component';
import { DisplayRolesComponent } from './display-roles/display-roles.component';
import { UpdateRoleComponent } from './update-role/update-role.component';

import { CreateRoleResource } from 'src/app/resources/roles/create-role.resource';
import { UpdateRoleResource } from 'src/app/resources/roles/update-role-resource';
import { DeleteRoleResource } from 'src/app/resources/roles/delete-role.resource';
import { EmitCredentialsByRoleResource } from 'src/app/resources/credentials/emit-credentials-by-role.resource';

import { BuildFormRole } from 'src/app/usecases/roles/build-form-role.service';
import { ListRolesPaginatedService } from 'src/app/usecases/roles/list-roles-paginated.service';
import { CreateRoleService } from 'src/app/usecases/roles/create-role.service';
import { UpdateRoleService } from 'src/app/usecases/roles/update-role.service';
import { SelectRoleComparatorService } from 'src/app/usecases/roles/select-role-comparator.service';
import { OrderRolesService } from 'src/app/usecases/roles/order-roles.service';
import { DeleteRoleService } from 'src/app/usecases/roles/delete-role.service';
import { EmitCredentialsByRoleService } from 'src/app/usecases/credentials/emit-credentials-by-role.service';
import { SelectOrUnselectRoleService } from 'src/app/usecases/roles/select-or-unselect-role.service';
import { CountRolesService } from 'src/app/usecases/roles/count-roles.service';
import { SelectOrUnselectAllRolesService } from 'src/app/usecases/roles/select-or-unselect-all-roles.service';
import { DeleteManyRolesService } from 'src/app/usecases/roles/delete-many-roles.service';
import { FindAllRolesService } from 'src/app/usecases/roles/find-all-roles.service';

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
    UtilsModule,
    UiModule
  ],
  providers: [
    BuildFormRole,
    FindAllRolesService,
    ListRolesPaginatedService,
    CreateRoleResource,
    CreateRoleService,
    UpdateRoleResource,
    UpdateRoleService,
    SelectRoleComparatorService,
    OrderRolesService,
    DeleteRoleResource,
    DeleteRoleService,
    EmitCredentialsByRoleResource,
    EmitCredentialsByRoleService,
    SelectOrUnselectRoleService,
    CountRolesService,
    SelectOrUnselectAllRolesService,
    DeleteManyRolesService
  ],
})
export class RolesModule {}