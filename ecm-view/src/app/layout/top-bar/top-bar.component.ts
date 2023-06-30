import { Component } from '@angular/core';

interface PathRoute {
  icon: string,
  path: string,
  name: string
}

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent {

  user: string = 'Layla';
  routes: PathRoute[] = [
    { icon: 'home', path: '', name: 'Início' },
    { icon: 'settings', path: '', name: 'Configurações' },
    { icon: 'logout', path: '', name: 'Sair' }
  ]
}