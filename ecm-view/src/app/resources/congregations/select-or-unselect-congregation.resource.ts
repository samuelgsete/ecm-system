import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

import { Congregation } from "src/app/models/congregation.entity";
import { ISelectOrUnselectResource } from "../interfaces/select-or-unselect.resource";

@Injectable({
    providedIn: 'root'
})
export class SelectOrUnselectCongregationResource extends ISelectOrUnselectResource<Congregation> {

    constructor() { super('congregations') }
  
    run(id: string, isSelected: boolean): Observable<Congregation> {
        const selected = isSelected ? 1 : 0;
        return this.http.patch<Congregation>(this.baseUrl().concat(`/${id}?selected=${selected}`), {})
    }
}