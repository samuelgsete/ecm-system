import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { UsersModule } from '../components/users/users.module';
import { CredentialsModule } from '../components/credentials/credentials.module';

import { SideBarComponent } from './side-bar/side-bar.component';
import { LayoutComponent } from './layout.component';
import { FooterComponent } from './footer/footer.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { LogoutService } from '../security/logout.service';

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
    SharedModule,
    UsersModule,
    CredentialsModule
  ],
  providers: [
    LogoutService
  ]
})
export class LayoutModule {}