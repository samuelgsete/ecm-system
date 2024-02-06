import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';
import { UiInputSearchComponent } from './ui-input-search/ui-input-search.component';

@NgModule({
  declarations: [
    UiInputSearchComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    UiInputSearchComponent
  ]
})
export class UiModule {}