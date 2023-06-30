import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { SideBarComponent } from './side-bar/side-bar.component';
import { LayoutComponent } from './layout.component';
import { GoToPrintService } from '../usecases/members/go-to-print.service';
import { FooterComponent } from './footer/footer.component';
import { TopBarComponent } from './top-bar/top-bar.component';

@NgModule({
  declarations: [
    SideBarComponent,
    LayoutComponent,
    FooterComponent,
    TopBarComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule
  ],
  providers: [
    GoToPrintService
  ]
})
export class LayoutModule {}