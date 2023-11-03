import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../shared/shared.module';
import { FileSizePipe } from './pipes/file-size.pipe';
import { DateDurationPipe } from './pipes/date-duration.pipe';
import { MaritalStatusPipe } from './pipes/marital-status.pipe';
import { SmallTextPipe } from './pipes/small-text.pipe';
import { ScrollStepperFixDirective } from './directives/scroll-stepper-fix.directive';
import { DragDropUploadDirective } from './directives/drag-drop-upload.directive';
import { NoDataCreatedComponent } from './components/no-data-created/no-data-created.component';
import { SuchNotfoundComponent } from './components/such-notfound/such-notfound.component';
import { PageNotfoundComponent } from './components/page-notfound/page-notfound.component';
import { PageDescriptionComponent } from './components/page-description/page-description.component';
import { FormatDateService } from './services/format-date.service';
import { ListGendersService } from './services/list-genders.service';
import { ListMaritalStatusService } from './services/list-marital-status.service';

@NgModule({
  declarations: [
    FileSizePipe,
    DateDurationPipe,
    MaritalStatusPipe,
    SmallTextPipe,
    ScrollStepperFixDirective,
    DragDropUploadDirective,
    NoDataCreatedComponent,
    SuchNotfoundComponent,
    PageNotfoundComponent,
    PageDescriptionComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule
  ],
  exports: [
    FileSizePipe,
    DateDurationPipe,
    MaritalStatusPipe,
    SmallTextPipe,
    DragDropUploadDirective,
    ScrollStepperFixDirective,
    NoDataCreatedComponent,
    SuchNotfoundComponent,
    PageDescriptionComponent
  ],
  providers: [
    FormatDateService,
    ListGendersService,
    ListMaritalStatusService
  ]
})
export class UtilsModule {}