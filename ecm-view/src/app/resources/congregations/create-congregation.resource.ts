import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Congregation } from "src/app/models/congregation.entity";
import { ICreaterResource } from "../interfaces/creater.resource";

@Injectable({
    providedIn: 'root'
})
export class CreateCongregationResource extends ICreaterResource<Congregation> {

    constructor() { super('congregations') }

    run(congregation: Congregation): Observable<any> {
        return this.http.post<any>(this.baseUrl(), congregation);
    }
}