import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UploadsImagesModule } from '../uploads-images/uploads-images.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { PaginateModule } from '../paginate/paginate.module';
import { UtilsModule } from 'src/app/utils/utils.module';
import { DisplayFieldsComponent } from './display-fields/display-fields.component';
import { CreateFieldComponent } from './create-field/create-field.component';
import { BuildFormCreateFieldService } from 'src/app/usecases/fields/build-form-create-field.service';
import { CreateFieldStep1Component } from './create-field/create-field-step1/create-field-step1.component';
import { CreateFieldStep2Component } from './create-field/create-field-step2/create-field-step2.component';

@NgModule({
  declarations: [
    DisplayFieldsComponent,
    CreateFieldComponent,
    CreateFieldStep1Component,
    CreateFieldStep2Component
  ],
  imports: [
    CommonModule,
    SharedModule,
    UploadsImagesModule,
    UtilsModule,
    PaginateModule
  ],
  providers: [
    BuildFormCreateFieldService
  ]
})
export class FieldsModule {}