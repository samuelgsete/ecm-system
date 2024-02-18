import { Component, EventEmitter, Input, Output } from '@angular/core';

interface Image {
  src: string,
  alt: string
}

@Component({
  selector: 'app-no-data-created',
  templateUrl: './no-data-created.component.html',
  styleUrls: ['./no-data-created.component.css']
})
export class NoDataCreatedComponent {

  protected image: Image = {
    src: '/assets/img/svg/no-date-created.svg',
    alt: 'No data created'
  }

  @Input() message: string = 'Nenhum resultado encontrado';
  @Input() isVisible: boolean = false;
  @Input() labelButton: string = 'NOVO REGISTRO'; 

  @Output() onCreate: EventEmitter<void> = new EventEmitter<void>();

  create(): void {
    this.onCreate.emit();
  }
}