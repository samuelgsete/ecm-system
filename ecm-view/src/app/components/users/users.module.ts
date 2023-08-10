import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LogoutUserService } from 'src/app/usecases/users/logout-user.service';
import { ManagerUserService } from 'src/app/usecases/users/manager-user.service';
import { UserInfoResource } from 'src/app/resources/users/userinfo.resource';
import { UserInfoService } from 'src/app/usecases/users/userinfo.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    ManagerUserService,
    LogoutUserService,
    UserInfoResource,
    UserInfoService
  ]
})
export class UsersModule {}