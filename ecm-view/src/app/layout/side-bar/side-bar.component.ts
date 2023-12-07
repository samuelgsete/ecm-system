import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserInfoService } from 'src/app/usecases/users/userinfo.service';
import { PathRoute } from './path-route.entity';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {

  nameInitial: string = "U";
  routes: PathRoute[] = [
    { icon: 'person_search', path: 'members', name: 'Membros' },
    { icon: 'group_add', path: 'create/member', name: 'Novo membro' },
    { icon: 'collections_bookmark', path: 'roles', name: 'Cargos' },
    { icon: 'wb_shade', path: 'congregations', name: 'Congregações' },
    { icon: 'settings', path: 'settings', name: 'Configurações' }
  ];

  constructor(
    protected readonly router: Router,
    protected readonly userinfo: UserInfoService
  ) {}

  ngOnInit(): void {
    /**
      Recupera as informações do usuário logado
    **/
    this.userinfo.done().subscribe(userData => {
      this.nameInitial = userData.given_name[0];
    })
  }
}