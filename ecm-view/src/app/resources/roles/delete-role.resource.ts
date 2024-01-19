import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Role } from "src/app/models/role.entity";
import { IRemoverResource } from "../interfaces/remover.resource";

@Injectable()
export class DeleteRoleResource extends IRemoverResource<Role> {

    constructor() { super('roles') }

    run(id: string, role: Role): Observable<Role> {
        return this.http.delete<Role>(this.baseUrl().concat(`/${id}`), {
            body: role
        });
    }
}