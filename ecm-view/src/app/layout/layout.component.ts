import { Component } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {

  title: string = 'Início';
  subtile: string = 'Bem-vindo(a)';

  handleTitlePage(title: string): void {
    const titlePage = title.split(' ');
    this.title = titlePage[0];
    this.subtile = titlePage[1] || '';
  }
}