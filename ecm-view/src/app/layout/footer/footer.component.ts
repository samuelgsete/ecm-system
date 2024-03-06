import { Component } from '@angular/core';

interface RouteLink {
  name: string
  target: string
}

@Component({
  selector: 'ui-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  
  brand: string = 'Lytech';
  currentYear: number = new Date().getFullYear();
 
  routes: RouteLink[] = [
    { name: 'Sobre nós', target: '/app/home' }, 
    { name: 'Licença', target: '/app/home' }, 
    { name: 'Suporte', target: '/app/home' }, 
  ];
}