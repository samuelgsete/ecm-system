import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { GoToPrintService } from 'src/app/usecases/members/go-to-print.service';

interface PathRoute {
  icon: string,
  path: string,
  name: string
}

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent {

  routes: PathRoute[] = [
    { icon: 'account_box', path: 'members', name: 'Membros' },
    { icon: 'storage', path: 'roles', name: 'Cargos' },
    { icon: 'wb_shade', path: 'congregations', name: 'Congregações' },
    { icon: 'person_add', path: 'create/member', name: 'Novo Membro' },
    { icon: 'print', path: '~/http://localhost:8090/api/v1/credentials/print/all', name: 'Imprimir' }
  ];

  constructor(
    protected readonly router: Router,
    protected readonly print: GoToPrintService
  ) {}
}