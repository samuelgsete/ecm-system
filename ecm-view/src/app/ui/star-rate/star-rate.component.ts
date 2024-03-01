import { Component, Input } from '@angular/core';

@Component({
  selector: 'ui-star-rate',
  templateUrl: './star-rate.component.html',
  styleUrls: ['./star-rate.component.css']
})
export class StarRateComponent {

  @Input() rating: number = 1;

  handleRate(rank: number): void {
    this.rating = rank;
  }
}