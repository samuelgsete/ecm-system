import { EventEmitter, Injectable } from "@angular/core";
import { NgxSpinnerService } from "ngx-spinner";
import { ToastrService } from "ngx-toastr";

import { Metric } from "src/app/layout/metrics/metric.entity";
import { DisplayMetricsResource } from "src/app/resources/metrics/display-metrics.resource";

@Injectable()
export class DisplayMetricsService {

    private isDone: EventEmitter<Metric[]> = new EventEmitter<Metric[]>();

    constructor(
        private readonly toastr: ToastrService,
        private readonly spinner: NgxSpinnerService,
        private readonly displayMetrics: DisplayMetricsResource
    ) {}

    done(): EventEmitter<any> { return this.isDone; }

    run(): void {
        this.spinner.show();
        this.displayMetrics.run().subscribe({
            next: (response) => {
                this.isDone.emit(response);
            },
            error: (eventErr) => {
                this.toastr.error('As métricas não foram carregadas', 'Há não :(', { 
                    progressBar: true,
                    positionClass: 'toast-bottom-center'
                });
            }
        }).add(() => {
            this.spinner.hide();
        })
    }
}