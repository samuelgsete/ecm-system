import { Component, OnInit } from '@angular/core';

import { Metric } from './metric.entity';
import { DisplayMetricsService } from 'src/app/usecases/metrics/display-metrics.service';

@Component({
  selector: 'app-metrics',
  templateUrl: './metrics.component.html',
  styleUrls: ['./metrics.component.css']
})
export class MetricsComponent implements OnInit {

  metrics: Metric[] = [];
  
  constructor(private readonly displayMetrics: DisplayMetricsService) {}

  ngOnInit(): void {
    this.displayMetrics.run();
    this.displayMetrics.done().subscribe(response => {
      this.metrics = response;
    })
  }
}