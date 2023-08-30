import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from 'src/app/shared/shared.module';
import { PaginateModule } from '../paginate/paginate.module';
import { UtilsModule } from 'src/app/utils/utils.module';
import { ListCongregationsPaginatedResource } from 'src/app/resources/congregations/list-congregations-paginated.resource';
import { ListCongregationsPaginatedService } from 'src/app/usecases/congregations/list-congregations-paginated.service';
import { CreateCongregrationComponent } from './create-congregration/create-congregration.component';
import { CreateCongregationResource } from 'src/app/resources/congregations/create-congregation.resource';
import { CreateCongregationService } from 'src/app/usecases/congregations/create-congregation.service';
import { DisplayCongregationsComponent } from './display-congregations/display-congregations.component';
import { UpdateCongregationService } from 'src/app/usecases/congregations/update-congregation.service';
import { UpdateCongregationResource } from 'src/app/resources/congregations/update-congregation.resource';
import { UpdateCongregationComponent } from './update-congregation/update-congregation.component';
import { SelectCongregationComparatorService } from 'src/app/usecases/congregations/select-congregation-comparator.service';
import { OrderCongregationsService } from 'src/app/usecases/congregations/order-congregations.service';

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
    UtilsModule
  ],
  providers: [
    ListCongregationsPaginatedResource,
    ListCongregationsPaginatedService,
    CreateCongregationResource,
    CreateCongregationService,
    UpdateCongregationResource,
    UpdateCongregationService,
    SelectCongregationComparatorService,
    OrderCongregationsService
  ]
})
export class CongregationsModule {}