import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

import { Role } from "src/app/models/role.entity";
import { IRemoverResource } from "../interfaces/remover.resource";

@Injectable()
export class DeleteRoleResource extends IRemoverResource<Role> {

    constructor(protected readonly http: HttpClient) { super('roles') }

    run(id: string, role: Role): Observable<Role> {
        return this.http.delete<Role>(this.baseUrl().concat(`/${id}`), {
            body: role
        });
    }
}