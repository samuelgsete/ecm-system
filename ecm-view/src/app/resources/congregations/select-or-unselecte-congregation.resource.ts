import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

import { HttpRequest } from "../interfaces/http-request.resource";
import { Congregation } from "src/app/models/congregation.entity";

@Injectable({
    providedIn: 'root'
})
export class SelectOrUnselectCongregationResource extends HttpRequest {

    private controller = 'congregations';
  
    run(id: string, selected: boolean): Observable<Congregation> {
        const _selected = selected ? 1 : 0;
        return this.http.patch<Congregation>(this.localUrl.concat(this.controller).concat(`/${id}?selected=${_selected}`), {}); 
    }
}