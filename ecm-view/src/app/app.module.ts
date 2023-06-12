import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MembersModule } from './components/members/members.module';
import { RolesModule } from './components/roles/roles.module';
import { CongregationsModule } from './components/congregations/congregations.module';
import { UploadsImagesModule } from './components/uploads-images/uploads-images.module';
import { PaginateModule } from './components/paginate/paginate.module';
import { LayoutModule } from './layout/layout.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    PaginateModule,
    HttpClientModule,
    MembersModule,
    RolesModule,
    CongregationsModule,
    UploadsImagesModule,
    LayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}