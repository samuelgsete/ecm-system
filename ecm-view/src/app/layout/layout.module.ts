import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { UsersModule } from '../components/users/users.module';
import { CredentialsModule } from '../components/credentials/credentials.module';
import { UtilsModule } from '../utils/utils.module';
import { UiModule } from '../ui/ui.module';

import { SideBarComponent } from './side-bar/side-bar.component';
import { LayoutComponent } from './layout.component';
import { FooterComponent } from './footer/footer.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { LogoutService } from '../security/logout.service';
import { MetricsComponent } from './metrics/metrics.component';
import { UserLoggedComponent } from './side-bar/user-logged/user-logged.component';

@NgModule({
  declarations: [
    SideBarComponent,
    LayoutComponent,
    FooterComponent,
    TopBarComponent,
    MetricsComponent,
    UserLoggedComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    UsersModule,
    UtilsModule,
    CredentialsModule,
    UiModule
  ],
  exports: [
    MetricsComponent
  ],
  providers: [
    LogoutService
  ]
})
export class LayoutModule {}