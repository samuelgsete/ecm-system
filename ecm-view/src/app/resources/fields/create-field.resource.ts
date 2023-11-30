import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";

import { Field } from "src/app/models/field.entity";
import { ICreaterResource } from "../interfaces/creater.resource";

@Injectable()
export class CreateFieldResource extends ICreaterResource<Field> {

    public constructor(private readonly http: HttpClient) { super('fields') }

    public override run(field: Field): Observable<any> {
        return this.http.post<any>(this.baseUrl(), field);
    }
}