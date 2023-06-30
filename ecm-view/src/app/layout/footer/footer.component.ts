import { Component } from '@angular/core';

interface Link {
  name: string,
  target: string
}

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {

  links: Link[] = [
    { name: 'Sobre', target: '#' },
    { name: 'Funcionalidades', target: '#' },
    { name: 'Planos', target: '#' },
    { name: 'Contatos', target: '#' },
    { name: 'Privacidade', target: '#' },
  ]

  currentYear: number = new Date().getFullYear();
}