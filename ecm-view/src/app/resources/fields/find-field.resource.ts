import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";

import { IFinderFirstResource } from "../interfaces/finder-first.resource";
import { Field } from "src/app/models/field.entity";

@Injectable()
export class FindFieldResource extends IFinderFirstResource<Field> {

    constructor(private readonly http: HttpClient) { super('fields') }

    run(): Observable<Field> {
        return this.http.get<Field>(this.baseUrl())
    }
}