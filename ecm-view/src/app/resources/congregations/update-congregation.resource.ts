import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Congregation } from "src/app/models/congregation.entity";
import { IUpdaterResource } from "../interfaces/updater.resource";

@Injectable({
    providedIn: 'root'
})
export class UpdateCongregationResource extends IUpdaterResource<Congregation> {

    constructor() { super('congregations') }

    run(id: string, congregation: Congregation): Observable<Congregation> {
        return this.http.put<Congregation>(this.baseUrl().concat(`/${id}`), congregation);
    }
}