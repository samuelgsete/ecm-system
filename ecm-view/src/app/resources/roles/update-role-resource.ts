import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { UpdateResource } from "../models/update.resource";
import { Role } from "src/app/models/role.entity";

@Injectable()
export class UpdateRoleResource extends UpdateResource<Role> {

    public constructor(private readonly http: HttpClient) {
        super('roles')
    }

    public run(id: number, role: Role): Observable<Role> {
        return this.http.put<Role>(this.getBaseUrl().concat(`/${id}`), role);
    }
}