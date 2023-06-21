import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from 'src/app/shared/shared.module';
import { PaginateModule } from '../paginate/paginate.module';

import { DisplayThemesComponent } from './display-themes/display-themes.component';

import { ListCredentialThemesPaginatedResource } from 'src/app/resources/credential-themes/list-credential-themes-paginated.resource';
import { ListCredentialThemesPaginatedService } from 'src/app/usecases/credential-themes/list-credential-themes-paginated.service';
import { MakeThemeToMainResource } from 'src/app/resources/credential-themes/make-theme-to-main.resource';
import { MakeThemeToMainService } from 'src/app/usecases/credential-themes/make-theme-to-main.service';
import { GoToPrintService } from 'src/app/usecases/members/go-to-print.service';
import { OrdinationsThemesService } from 'src/app/usecases/credential-themes/ordinations--themes.service';
import { OrderThemesService } from 'src/app/usecases/credential-themes/order-themes.service';

@NgModule({
  declarations: [
    DisplayThemesComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    PaginateModule
  ],
  providers: [
    ListCredentialThemesPaginatedResource,
    ListCredentialThemesPaginatedService,
    MakeThemeToMainResource,
    MakeThemeToMainService,
    GoToPrintService,
    OrdinationsThemesService,
    OrderThemesService
  ]
})
export class CredentialThemesModule {}