import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-name-page',
  templateUrl: './name-page.component.html',
  styleUrls: ['./name-page.component.css']
})
export class NamePageComponent {

  @Input() title!: string
  @Input() subtitle!: string

}