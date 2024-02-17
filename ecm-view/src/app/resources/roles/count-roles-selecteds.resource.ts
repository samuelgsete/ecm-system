import { Observable } from "rxjs";
import { ICountSelectedsResource } from "../interfaces/count-selecteds.resource";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class CountRolesSelectedsResource extends ICountSelectedsResource {

    constructor() {
        super('roles', 'count-selecteds')
    }

    run(): Observable<number> {
        return this.http.get<number>(this.baseUrl());
    }
}