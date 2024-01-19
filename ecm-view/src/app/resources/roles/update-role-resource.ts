import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Role } from "src/app/models/role.entity";
import { IUpdaterResource } from "../interfaces/updater.resource";

@Injectable()
export class UpdateRoleResource extends IUpdaterResource<Role> {

    constructor() { super('roles') }

    run(id: string, role: Role): Observable<Role> {
        return this.http.put<Role>(this.baseUrl().concat(`/${id}`), role);
    }
}