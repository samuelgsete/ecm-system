import { Component, EventEmitter, Input, Output } from '@angular/core';

import { Ordination } from 'src/app/models/ordination.entity';

@Component({
  selector: 'order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent {

  @Input() ordinations: Ordination[] = [];
  @Output() changeOrdination: EventEmitter<string> = new EventEmitter<string>();
  
  onChange(ordination: Ordination): void {
    const activeOrdination = this.ordinations.filter(ordination => ordination.isActive)[0];
    activeOrdination.isActive = false;
    ordination.isActive = true;
    this.changeOrdination.emit(ordination.name);
  }
}