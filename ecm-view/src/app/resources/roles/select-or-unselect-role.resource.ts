import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

import { Role } from "src/app/models/role.entity";
import { ISelectOrUnselectResource } from "../interfaces/select-or-unselect.resource";

@Injectable({
    providedIn: 'root'
})
export class SelectOrUnselectRolesResource  extends ISelectOrUnselectResource<Role> {

    constructor() { super('roles') }

    run(id: string, isSelected: boolean): Observable<Role> {
        const selected = isSelected ? 1 : 0;
        return this.http.patch<Role>(this.baseUrl().concat(`/${id}?isSelected=${selected}`), {});
    }

}