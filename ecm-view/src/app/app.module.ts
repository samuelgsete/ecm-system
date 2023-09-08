import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { KeycloakAngularModule, KeycloakService } from 'keycloak-angular';

import { AppRoutingModule } from './app-routing.module';
import { MembersModule } from './components/members/members.module';
import { RolesModule } from './components/roles/roles.module';
import { CongregationsModule } from './components/congregations/congregations.module';
import { UploadsImagesModule } from './components/uploads-images/uploads-images.module';
import { PaginateModule } from './components/paginate/paginate.module';
import { LayoutModule } from './layout/layout.module';

import { AppComponent } from './app.component';
import { initializeKeycloak } from './security/keycloak.config';
import { CredentialThemesModule } from './components/credential-themes/credential-themes.module';
import { UsersModule } from './components/users/users.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    KeycloakAngularModule,
    PaginateModule,
    HttpClientModule,
    MembersModule,
    RolesModule,
    CongregationsModule,
    UploadsImagesModule,
    LayoutModule,
    CredentialThemesModule,
    UsersModule
  ],
  providers: [
    /*{
      provide: APP_INITIALIZER,
      useFactory: initializeKeycloak,
      multi: true,
      deps: [KeycloakService],
    }*/
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}