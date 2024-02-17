import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

import { HttpRequest } from "../interfaces/http-request.resource";

@Injectable({
    providedIn: 'root'
})
export class CountCongregationsSelectedsResource extends HttpRequest {

    run(): Observable<number> {
        return this.http.get<number>(this.localUrl.concat('congregations/count/selecteds'));
    }
}