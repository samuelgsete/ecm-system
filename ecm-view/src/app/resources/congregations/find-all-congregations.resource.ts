import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

import { IFinderAllResource } from "../interfaces/finder-all.resource";
import { Congregation } from "src/app/models/congregation.entity";

@Injectable({
    providedIn: 'root'
})
export class FindAllCongregationsResource extends IFinderAllResource<Congregation> {

    constructor() { super('congregations', 'all') }

    run(): Observable<Congregation[]> {
        return this.http.get<Congregation[]>(this.baseURL());
    }
}