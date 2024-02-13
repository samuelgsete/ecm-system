import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';
import { UiInputSearchComponent } from './ui-input-search/ui-input-search.component';
import { UiTableSkeletonComponent } from './ui-table-skeleton/ui-table-skeleton.component';
import { UiMetricsSkeletonComponent } from './ui-metrics-skeleton/ui-metrics-skeleton.component';
import { OrderListComponent } from './order-list/order-list.component';

@NgModule({
  declarations: [
    UiInputSearchComponent,
    UiTableSkeletonComponent,
    UiMetricsSkeletonComponent,
    OrderListComponent,
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    UiInputSearchComponent,
    UiTableSkeletonComponent,
    UiMetricsSkeletonComponent,
    OrderListComponent,
  ]
})
export class UiModule {}