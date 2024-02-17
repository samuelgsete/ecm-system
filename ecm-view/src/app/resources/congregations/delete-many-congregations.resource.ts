import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

import { IRemoverManyResource } from "../interfaces/remover-many.resource";

@Injectable({
    providedIn: 'root'
})
export class DeleteManyCongregationsResource extends IRemoverManyResource {

    constructor() {
        super('congregations', 'selecteds');
    }

    run(): Observable<void> {
        return this.http.delete<void>(this.baseUrl())
    }
}