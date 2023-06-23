import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormatDateService } from './services/format-date.service';
import { NoDataCreatedComponent } from './components/no-data-created/no-data-created.component';

@NgModule({
  declarations: [
    NoDataCreatedComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    NoDataCreatedComponent
  ],
  providers: [
    FormatDateService
  ]
})
export class UtilsModule {}
