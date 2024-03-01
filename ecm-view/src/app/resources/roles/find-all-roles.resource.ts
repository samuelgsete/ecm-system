import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

import { IFinderAllResource } from "../interfaces/finder-all.resource";
import { Role } from "src/app/models/role.entity";

@Injectable({
    providedIn: 'root'
})
export class FindAllRolesResource extends IFinderAllResource<Role> {

    constructor() { super('roles', 'all') }

    run(): Observable<Role[]> {
        return this.http.get<Role[]>(this.baseURL());
    }
}