import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";

import { CreateResource } from "../models/create.resource";
import { Role } from "src/app/models/role.entity";

@Injectable()
export class CreateRoleResource extends CreateResource<Role> {

    public constructor(private readonly http: HttpClient) { super('roles') }

    public override run(role: Role): Observable<any> {
        return this.http.post<any>(this.getBaseUrl(), role);
    }
}