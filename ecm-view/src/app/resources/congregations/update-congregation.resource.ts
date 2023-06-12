import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { UpdateResource } from "../models/update.resource";
import { Congregation } from "src/app/models/congregation.entity";

@Injectable()
export class UpdateCongregationResource extends UpdateResource<Congregation> {

    public constructor(private readonly http: HttpClient) {
        super('congregations');
    }

    public run(id: number, congregation: Congregation): Observable<Congregation> {
        return this.http.put<Congregation>(this.getBaseUrl().concat(`/${id}`), congregation);
    }
}