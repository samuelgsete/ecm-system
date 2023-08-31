import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-page-description',
  templateUrl: './page-description.component.html',
  styleUrls: ['./page-description.component.css']
})
export class PageDescriptionComponent {

  @Input()
  title!: string;

  @Input()
  subtitle!: string;
}