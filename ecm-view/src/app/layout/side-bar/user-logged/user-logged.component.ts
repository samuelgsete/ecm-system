import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { UserLogged } from 'src/app/resources/users/user-logged.entity';
import { LogoutService } from 'src/app/security/logout.service';
import { ManagerUserService } from 'src/app/usecases/users/manager-user.service';
import { UserInfoService } from 'src/app/usecases/users/userinfo.service';

@Component({
  selector: 'user-logged',
  templateUrl: './user-logged.component.html',
  styleUrls: ['./user-logged.component.css']
})
export class UserLoggedComponent implements OnInit {

  $user!: Observable<UserLogged>;

  constructor(
    protected readonly logout: LogoutService,
    protected readonly userinfo: UserInfoService,
    protected readonly managerUser: ManagerUserService
  ) {}

  handleLogout(): void {
    this.logout.run();
  }

  handleAccount(): void {
    this.managerUser.run();
  }

  ngOnInit(): void {
    this.$user = this.userinfo.run();
  }
}