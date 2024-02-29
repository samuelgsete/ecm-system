import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

import { ISelectOrUnselectAllResource } from "../interfaces/select-or-unselect-all.resource";

@Injectable({
    providedIn: 'root'
})
export class SelectOrUnselectAllMembersResource extends ISelectOrUnselectAllResource {

    constructor() { super('members', 'toggle-selection') }

    run(isSelected: boolean): Observable<void> {
        let selected = isSelected ? 1 : 0;
        return this.http.put<void>(this.baseUrl().concat(`?selected=${selected}`), {});
    }
}