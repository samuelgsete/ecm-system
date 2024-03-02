import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';
import { UtilsModule } from '../utils/utils.module';

import { UiInputSearchComponent } from './ui-input-search/ui-input-search.component';
import { UiTableSkeletonComponent } from './ui-table-skeleton/ui-table-skeleton.component';
import { UiMetricsSkeletonComponent } from './ui-metrics-skeleton/ui-metrics-skeleton.component';
import { OrderListComponent } from './order-list/order-list.component';
import { CommandBarComponent } from './command-bar/command-bar.component';
import { CardCredThemeComponent } from './card-cred-theme/card-cred-theme.component';
import { StarRateComponent } from './star-rate/star-rate.component';
import { UiCardSkeletonComponent } from './ui-card-skeleton/ui-card-skeleton.component';

@NgModule({
  declarations: [
    UiInputSearchComponent,
    UiTableSkeletonComponent,
    UiMetricsSkeletonComponent,
    OrderListComponent,
    CommandBarComponent,
    CardCredThemeComponent,
    StarRateComponent,
    UiCardSkeletonComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    UtilsModule,
  ],
  exports: [
    UiInputSearchComponent,
    UiTableSkeletonComponent,
    UiMetricsSkeletonComponent,
    OrderListComponent,
    CommandBarComponent,
    CardCredThemeComponent,
    UiCardSkeletonComponent,
  ]
})
export class UiModule {}