import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

import { ICounterResource } from "../interfaces/counter.resource";
import { CountElements } from "src/app/utils/models/count-elements.entity";

@Injectable({
    providedIn: 'root'
})
export class CountRolesResource extends ICounterResource {

    constructor() {
        super('roles', 'count')
    }

    run(): Observable<CountElements> {
        return this.http.get<CountElements>(this.baseUrl());
    }
}