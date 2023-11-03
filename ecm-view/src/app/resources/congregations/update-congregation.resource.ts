import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";

import { Congregation } from "src/app/models/congregation.entity";
import { IUpdaterResource } from "../interfaces/updater.resource";

@Injectable()
export class UpdateCongregationResource extends IUpdaterResource<Congregation> {

    constructor(private readonly http: HttpClient) {
        super('congregations');
    }

    run(id: string, congregation: Congregation): Observable<Congregation> {
        return this.http.put<Congregation>(this.baseUrl().concat(`/${id}`), congregation);
    }
}