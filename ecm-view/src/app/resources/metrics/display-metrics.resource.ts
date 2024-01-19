import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

import { HttpRequest } from "../interfaces/http-request.resource";
import { Metric } from "src/app/layout/metrics/metric.entity";

@Injectable()
export class DisplayMetricsResource extends HttpRequest {

    run(): Observable<Metric[]> {
        return this.http.get<Metric[]>(this.localUrl.concat('metrics/display'));
    }
}