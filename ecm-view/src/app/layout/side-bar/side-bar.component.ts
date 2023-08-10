import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PrintAllCredentialsService } from 'src/app/usecases/credentials/print-all-credentials.service';
import { UserInfoService } from 'src/app/usecases/users/userinfo.service';
import { PathRoute } from './path-route.entity';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {

  nameInitial: string = "";
  routes: PathRoute[] = [
    { icon: 'group_add', path: 'members', name: 'Membros' },
    { icon: 'layers', path: 'roles', name: 'Cargos' },
    { icon: 'wb_shade', path: 'congregations', name: 'Congregações' },
    { icon: 'widgets', path: 'credential/themes', name: 'Temas' }
  ];

  constructor(
    protected readonly router: Router,
    protected readonly userinfo: UserInfoService,
    protected readonly print: PrintAllCredentialsService
  ) {}

  ngOnInit(): void {
    /**
      Recupera as informações do usuário logado
    **/
    this.userinfo.done().subscribe(userData => {
      this.nameInitial = userData.given_name[0];
    })
    /**
      Obtém o HTML contendo as credenciais para impressão
      Renderiza o conteúdo HTML numa nova aba no navegador
    **/
    this.print.done().subscribe(htmlContent => {
      let newWin = open();
      newWin?.document.write(htmlContent);
    })
  }
}