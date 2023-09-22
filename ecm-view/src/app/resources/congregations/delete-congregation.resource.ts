import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

import { DeleteResource } from "../models/delete.resource";
import { Congregation } from "src/app/models/congregation.entity";

@Injectable()
export class DeleteCongregationeResource extends DeleteResource<Congregation> {

    constructor(protected readonly http: HttpClient) { super('congregations') }

    run(id: string, congregation: Congregation): Observable<Congregation> {
        return this.http.delete<Congregation>(this.getBaseUrl().concat(`/${id}`), {
            body: congregation
        });
    }
}