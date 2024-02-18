import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CredentialsModule } from '../credentials/credentials.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { PaginateModule } from '../paginate/paginate.module';
import { UtilsModule } from 'src/app/utils/utils.module';
import { UiModule } from 'src/app/ui/ui.module';

import { CreateCongregrationComponent } from './create-congregration/create-congregration.component';
import { DisplayCongregationsComponent } from './display-congregations/display-congregations.component';
import { UpdateCongregationComponent } from './update-congregation/update-congregation.component';

import { ListCongregationsPaginatedService } from 'src/app/usecases/congregations/list-congregations-paginated.service';
import { CreateCongregationService } from 'src/app/usecases/congregations/create-congregation.service';
import { UpdateCongregationService } from 'src/app/usecases/congregations/update-congregation.service';
import { SelectCongregationComparatorService } from 'src/app/usecases/congregations/select-congregation-comparator.service';
import { OrderCongregationsService } from 'src/app/usecases/congregations/order-congregations.service';
import { DeleteCongregationService } from 'src/app/usecases/congregations/delete-congregation.service';
import { BuildFormCongregation } from 'src/app/usecases/congregations/build-form-congregation.service';
import { SelectOrUnselecteCongregationService } from 'src/app/usecases/congregations/select-or-unselect-congregation.service';
import { CountCongregationsService } from 'src/app/usecases/congregations/count-congegations.service';
import { SelectOrUnselectAllCongregationsService } from 'src/app/usecases/congregations/select-or-unselect-all-congregations.service';
import { DeleteManyCongregationService } from 'src/app/usecases/congregations/delete-many-congregations.service';

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
    CredentialsModule,
    UiModule
  ],
  providers: [
    ListCongregationsPaginatedService,
    CreateCongregationService,
    UpdateCongregationService,
    SelectCongregationComparatorService,
    OrderCongregationsService,
    DeleteCongregationService,
    BuildFormCongregation,
    SelectOrUnselecteCongregationService,
    CountCongregationsService,
    SelectOrUnselectAllCongregationsService,
    DeleteManyCongregationService
  ]
})
export class CongregationsModule {}