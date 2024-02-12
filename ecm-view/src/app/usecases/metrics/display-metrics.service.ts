import { EventEmitter, Injectable } from "@angular/core";
import { ToastrService } from "ngx-toastr";
import { Observable } from "rxjs";

import { Metric } from "src/app/layout/metrics/metric.entity";
import { DisplayMetricsResource } from "src/app/resources/metrics/display-metrics.resource";

@Injectable({
    providedIn: 'root'
})
export class DisplayMetricsService {

    update: EventEmitter<void> = new EventEmitter<void>();
        
    constructor(
        private readonly toastr: ToastrService,
        private readonly displayMetrics: DisplayMetricsResource
    ) {}

    onUpdate(): void {
       this.update.emit();
    }
    
    run(): Observable<Metric[]> {
        return this.displayMetrics.run();
    }
}