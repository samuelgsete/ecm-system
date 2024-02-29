import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { Ordination } from 'src/app/models/ordination.entity';

@Component({
  selector: 'order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnInit {
 
  @Input() ordinations: Ordination[] = [];
  @Input() selectedOrdination: string = '';
  @Output() changeOrdination: EventEmitter<string> = new EventEmitter<string>();
  
  onChange(ordination: Ordination): void {
    const activeOrdination = this.ordinations.filter(ordination => ordination.isActive)[0];
    activeOrdination.isActive = false;
    ordination.isActive = true;
    this.changeOrdination.emit(ordination.name);
  }

  ngOnInit(): void {
      this.ordinations = this.ordinations.map(ordination => {
        if(ordination.name == this.selectedOrdination) ordination.isActive = true;
        else ordination.isActive = false;
        return ordination;
      })
  }
}