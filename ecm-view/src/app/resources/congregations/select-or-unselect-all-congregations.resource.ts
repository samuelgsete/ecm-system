import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

import { ISelectOrUnselectAllResource } from "../interfaces/select-or-unselect-all.resource";

@Injectable({
    providedIn: 'root'
})
export class SelectOrUnselectAllCongregationsResource extends ISelectOrUnselectAllResource {

    constructor() { super('congregations', 'toggle-selection') }

    run(isSelected: boolean): Observable<any> {
        const selected = isSelected ? 1 : 0;
        return this.http.put<void>(this.baseUrl().concat(`?selected=${selected}`), {});
    }
}