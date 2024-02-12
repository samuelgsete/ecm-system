import { Component, Input } from '@angular/core';

@Component({
  selector: 'such-notfound',
  templateUrl: './such-notfound.component.html',
  styleUrls: ['./such-notfound.component.css']
})
export class SuchNotfoundComponent {

  @Input() keyword!: string;
  @Input() isVisible: boolean = false;

  image = {
    src: 'assets/img/svg/page-not-found.svg',
    alt: 'Such Not Found'
  }
}