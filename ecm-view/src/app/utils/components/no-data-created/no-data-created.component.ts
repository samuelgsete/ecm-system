import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-no-data-created',
  templateUrl: './no-data-created.component.html',
  styleUrls: ['./no-data-created.component.css']
})
export class NoDataCreatedComponent {

  srcImg: string = '/assets/img/svg/no-date-created.svg';

  @Input() message: string = 'Nenhum resultado encontrado';
}