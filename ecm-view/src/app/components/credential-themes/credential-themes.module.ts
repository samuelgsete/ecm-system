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
import { OrderThemesService } from 'src/app/usecases/credential-themes/order-themes.service';
import { FindThemeActivatedResource } from 'src/app/resources/credential-themes/find-theme-activated.resource';
import { FindThemeActivatedService } from 'src/app/usecases/credential-themes/find-theme-activated.service';
import { UtilsModule } from 'src/app/utils/utils.module';

@NgModule({
  declarations: [
    DisplayThemesComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    UtilsModule,
    PaginateModule
  ],
  providers: [
    ListCredentialThemesPaginatedResource,
    ListCredentialThemesPaginatedService,
    MakeThemeToMainResource,
    MakeThemeToMainService,
    GoToPrintService,
    OrderThemesService,
    FindThemeActivatedResource,
    FindThemeActivatedService
  ]
})
export class CredentialThemesModule {}