import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from 'src/app/shared/shared.module';
import { PaginationComponent } from './pagination/pagination.component';
import { PaginationService } from './pagination/pagination.service';

@NgModule({
  declarations: [
    PaginationComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    PaginationComponent
  ],
  providers: [
    PaginationService
  ]
})
export class PaginateModule {}