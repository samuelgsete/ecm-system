import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { LogoutUserService } from 'src/app/usecases/users/logout-user.service';
import { ManagerUserService } from 'src/app/usecases/users/manager-user.service';
import { UserInfoService } from 'src/app/usecases/users/userinfo.service';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit {

  user: string = 'Layla';
  
  constructor(
    protected readonly router: Router,
    protected readonly managerUser: ManagerUserService,
    protected readonly logoutUser: LogoutUserService,
    protected readonly userinfo: UserInfoService
  ) {}

  ngOnInit(): void {
    this.userinfo.run();
    this.userinfo.done().subscribe(userData => {
      this.user = userData.name;
    })
  }
}