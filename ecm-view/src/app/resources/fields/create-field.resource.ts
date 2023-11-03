import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";

import { CreateResource } from "../models/create.resource";
import { Field } from "src/app/models/field.entity";

@Injectable()
export class CreateFieldResource extends CreateResource<Field> {

    public constructor(private readonly http: HttpClient) { super('fields') }

    public override run(field: Field): Observable<any> {
        return this.http.post<any>(this.getBaseUrl(), field);
    }
}