import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UtilsModule } from 'src/app/utils/utils.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { UploadsImagesModule } from '../uploads-images/uploads-images.module';
import { PaginateModule } from '../paginate/paginate.module';
import { UiModule } from 'src/app/ui/ui.module';

import { SettingsSystemComponent } from './settings-system/settings-system.component';
import { SetShepherdComponent } from './set-shepherd/set-shepherd.component';
import { DisplayShepherdComponent } from './display-shepherd/display-shepherd.component';
import { DisplayThemesComponent } from './display-themes/display-themes.component';
import { UpdateShepherdComponent } from './update-shepherd/update-shepherd.component';

import { FindShepherdResource } from 'src/app/resources/shepherd/find-shepherd.resource';
import { CreateShepherdResource } from 'src/app/resources/shepherd/create-shepherd.resource';
import { UpdateShepherdResource } from 'src/app/resources/shepherd/update-shepherd.resource';
import { ListCredentialThemesPaginatedResource } from 'src/app/resources/credential-themes/list-credential-themes-paginated.resource';
import { MakeThemeToMainResource } from 'src/app/resources/credential-themes/make-theme-to-main.resource';

import { FindShepherdService } from 'src/app/usecases/shepherd/find-shepherd.service';
import { CreateShepherdService } from 'src/app/usecases/shepherd/create-shepherd.service';
import { ParseDataToShepherdService } from 'src/app/usecases/shepherd/parse-data-to-shepherd.service';
import { UpdateShepherdService } from 'src/app/usecases/shepherd/update-shepherd.service';
import { ListCredentialThemesPaginatedService } from 'src/app/usecases/credential-themes/list-credential-themes-paginated.service';
import { MakeThemeToMainService } from 'src/app/usecases/credential-themes/make-theme-to-main.service';

@NgModule({
  declarations: [
    SettingsSystemComponent,
    SetShepherdComponent,
    DisplayShepherdComponent,
    DisplayThemesComponent,
    UpdateShepherdComponent
  ],
  imports: [
    CommonModule,
    PaginateModule,
    UtilsModule,
    SharedModule,
    UploadsImagesModule,
    UiModule
  ],
  providers: [
    FindShepherdResource,
    FindShepherdService,
    ParseDataToShepherdService,
    CreateShepherdResource,
    CreateShepherdService,
    UpdateShepherdResource,
    UpdateShepherdService,
    ListCredentialThemesPaginatedResource,
    ListCredentialThemesPaginatedService,
    MakeThemeToMainService,
    MakeThemeToMainResource
  ]
})
export class SettingsModule {}