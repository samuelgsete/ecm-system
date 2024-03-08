import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { PathRoute } from './path-route.entity';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {

  routes: PathRoute[] = [
    { icon: 'home', path: 'home', name: 'Início', title: 'Início Bem-vindo(a)',},
    { icon: 'person_search', path: 'members', name: 'Membros', title: 'Membros cadastrados' },
    { icon: 'group_add', path: 'new-member', name: 'Novo membro' , title: 'Novo membro'},
    { icon: 'collections_bookmark', path: 'roles', name: 'Cargos', title: 'Cargos cadastrados' },
    { icon: 'wb_shade', path: 'congregations', name: 'Congregações', title: 'Congregações cadastradas' },
    { icon: 'palette', path: 'templates', name: 'Templates', title: 'Templates disponíveis' }
  ];

  @Output()
  changeTitlePage: EventEmitter<string> = new EventEmitter<string>;

  constructor(
    protected readonly router: Router
  ) {}

  handleTitlePage(title: string): void {
    this.changeTitlePage.emit(title)
  }

  setTitlePageOnReload(): void {
    const url = this.router.url.split('?')[0];
    let currentPath = url.split('/')[2];
    const activeRoute = this.routes.filter(route => route.path === currentPath)[0];
    this.changeTitlePage.emit(activeRoute.title);
  }

  ngOnInit(): void {
   this.setTitlePageOnReload();
  }
}