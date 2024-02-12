import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { Metric } from './metric.entity';
import { DisplayMetricsService } from 'src/app/usecases/metrics/display-metrics.service';

@Component({
  selector: 'app-metrics',
  templateUrl: './metrics.component.html',
  styleUrls: ['./metrics.component.css']
})
export class MetricsComponent implements OnInit {

  metrics$!: Observable<Metric[]>;
  
  constructor(readonly displayMetrics: DisplayMetricsService) {}

  onLoad(): void {
   this.metrics$ = this.displayMetrics.run();
  }

  ngOnInit(): void {
    this.onLoad();
    this.displayMetrics.update.subscribe(() => this.onLoad());
  }
}