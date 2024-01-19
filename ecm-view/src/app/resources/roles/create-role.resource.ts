import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Role } from "src/app/models/role.entity";
import { ICreaterResource } from "../interfaces/creater.resource";

@Injectable()
export class CreateRoleResource extends ICreaterResource<Role> {

    constructor() { super('roles') }

    run(role: Role): Observable<any> {
        return this.http.post<any>(this.baseUrl(), role);
    }
}