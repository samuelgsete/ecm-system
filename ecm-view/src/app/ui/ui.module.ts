import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';
import { UiInputSearchComponent } from './ui-input-search/ui-input-search.component';
import { UiTableSkeletonComponent } from './ui-table-skeleton/ui-table-skeleton.component';
import { UiMetricsSkeletonComponent } from './ui-metrics-skeleton/ui-metrics-skeleton.component';

@NgModule({
  declarations: [
    UiInputSearchComponent,
    UiTableSkeletonComponent,
    UiMetricsSkeletonComponent,
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    UiInputSearchComponent,
    UiTableSkeletonComponent,
    UiMetricsSkeletonComponent,
  ]
})
export class UiModule {}