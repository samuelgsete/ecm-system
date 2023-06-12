import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";

import { CreateResource } from "../models/create.resource";
import { Congregation } from "src/app/models/congregation.entity";

@Injectable()
export class CreateCongregationResource extends CreateResource<Congregation> {

    public constructor(private readonly http: HttpClient) {
        super('congregations');
    }

    public run(congregation: Congregation): Observable<any> {
        return this.http.post<any>(this.getBaseUrl(), congregation);
    }
}