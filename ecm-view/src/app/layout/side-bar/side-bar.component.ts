import { Component } from '@angular/core';
import { Router } from '@angular/router';

interface PathRoute {
  icon: string,
  path: string,
  name: string,
  isActive: boolean
}

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent {

  protected routes: PathRoute[] = [
    { icon: 'account_box', path: 'app/members', name: 'Membros', isActive: true },
    { icon: 'storage', path: 'app/roles', name: 'Cargos', isActive: false },
    { icon: 'wb_shade', path: 'app/congregations', name: 'Congregações', isActive: false },
    { icon: 'person_add', path: 'app/create/member', name: 'Novo Membro', isActive: false }
  ];

  protected urlPrint: string = 'http://localhost:8080/api/v1/credentials/print/all';

  public constructor(
    private readonly router: Router
  ) {}

  public goTo(route: PathRoute): void {
    this.setActiveRoute(route);
    this.router.navigateByUrl(`${route.path}`);
  }

  public toPrint(): void {
    window.open(this.urlPrint, '_blank')?.focus();
  }

  public setActiveRoute(route: PathRoute): void {
    let activeRoute = this.routes.filter(route => route.isActive)[0];
    activeRoute.isActive = false;
    route.isActive = true;
  }
}