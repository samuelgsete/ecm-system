import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CredentialsModule } from '../credentials/credentials.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { PaginateModule } from '../paginate/paginate.module';
import { UtilsModule } from 'src/app/utils/utils.module';

import { CreateCongregrationComponent } from './create-congregration/create-congregration.component';
import { DisplayCongregationsComponent } from './display-congregations/display-congregations.component';
import { UpdateCongregationComponent } from './update-congregation/update-congregation.component';

import { ListCongregationsPaginatedResource } from 'src/app/resources/congregations/list-congregations-paginated.resource';
import { CreateCongregationResource } from 'src/app/resources/congregations/create-congregation.resource';
import { UpdateCongregationResource } from 'src/app/resources/congregations/update-congregation.resource';
import { DeleteCongregationeResource } from 'src/app/resources/congregations/delete-congregation.resource';

import { ListCongregationsPaginatedService } from 'src/app/usecases/congregations/list-congregations-paginated.service';
import { CreateCongregationService } from 'src/app/usecases/congregations/create-congregation.service';
import { UpdateCongregationService } from 'src/app/usecases/congregations/update-congregation.service';
import { SelectCongregationComparatorService } from 'src/app/usecases/congregations/select-congregation-comparator.service';
import { OrderCongregationsService } from 'src/app/usecases/congregations/order-congregations.service';
import { DeleteCongregationService } from 'src/app/usecases/congregations/delete-congregation.service';
import { BuildFormCongregation } from 'src/app/usecases/congregations/build-form-congregation.service';


@NgModule({
  declarations: [
    CreateCongregrationComponent,
    DisplayCongregationsComponent,
    UpdateCongregationComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    PaginateModule,
    UtilsModule,
    CredentialsModule
  ],
  providers: [
    ListCongregationsPaginatedResource,
    ListCongregationsPaginatedService,
    CreateCongregationResource,
    CreateCongregationService,
    UpdateCongregationResource,
    UpdateCongregationService,
    SelectCongregationComparatorService,
    OrderCongregationsService,
    DeleteCongregationeResource,
    DeleteCongregationService,
    BuildFormCongregation
  ]
})
export class CongregationsModule {}