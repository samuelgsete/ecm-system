import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Injectable } from "@angular/core";

import { Role } from "src/app/models/role.entity";
import { FindOneResource } from "../models/find-one.resource";

@Injectable()
export class FindOneRoleResource extends FindOneResource<Role> {

    public constructor(private readonly http: HttpClient) { super('roles') }

    public override run(id: number): Observable<Role> {
        return this.http.get<Role>(this.getBaseUrl().concat(`/${id}`));
    }
}