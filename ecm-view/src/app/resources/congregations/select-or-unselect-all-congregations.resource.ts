import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

import { HttpRequest } from "../interfaces/http-request.resource";

@Injectable({
    providedIn: 'root'
})
export class SelectOrUnselectAllCongregationsResource extends HttpRequest {

    private controller = 'congregations';
    private action = '/toggle-selection';

    run(isSelected: boolean): Observable<any> {
        const selected = isSelected ? 1 : 0;
        return this.http.put<any>(
            this.localUrl.concat(this.controller).concat(this.action).concat(`?selected=${selected}`), {}
        );
        
    }
}