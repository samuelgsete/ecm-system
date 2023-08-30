import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { FormatDateService } from './services/format-date.service';
import { NoDataCreatedComponent } from './components/no-data-created/no-data-created.component';
import { ScrollStepperFixDirective } from './directives/scroll-stepper-fix.directive';
import { SuchNotfoundComponent } from './components/such-notfound/such-notfound.component';
import { PageNotfoundComponent } from './components/page-notfound/page-notfound.component';

@NgModule({
  declarations: [
    NoDataCreatedComponent,
    ScrollStepperFixDirective,
    SuchNotfoundComponent,
    PageNotfoundComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule
  ],
  exports: [
    NoDataCreatedComponent,
    ScrollStepperFixDirective,
    SuchNotfoundComponent
  ],
  providers: [
    FormatDateService
  ]
})
export class UtilsModule {}
