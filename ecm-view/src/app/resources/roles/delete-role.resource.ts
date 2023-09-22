import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

import { DeleteResource } from "../models/delete.resource";
import { Role } from "src/app/models/role.entity";

@Injectable()
export class DeleteRoleResource extends DeleteResource<Role> {

    constructor(protected readonly http: HttpClient) { super('roles') }

    run(id: string, role: Role): Observable<Role> {
        return this.http.delete<Role>(this.getBaseUrl().concat(`/${id}`), {
            body: role
        });
    }
}