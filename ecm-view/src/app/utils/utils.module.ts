import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormatDateService } from './services/format-date.service';
import { NoDataCreatedComponent } from './components/no-data-created/no-data-created.component';
import { ScrollStepperFixDirective } from './directives/scroll-stepper-fix.directive';

@NgModule({
  declarations: [
    NoDataCreatedComponent,
    ScrollStepperFixDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    NoDataCreatedComponent,
    ScrollStepperFixDirective
  ],
  providers: [
    FormatDateService
  ]
})
export class UtilsModule {}
