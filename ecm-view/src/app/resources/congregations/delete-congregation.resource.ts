import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Congregation } from "src/app/models/congregation.entity";
import { IRemoverResource } from "../interfaces/remover.resource";

@Injectable()
export class DeleteCongregationeResource extends IRemoverResource<Congregation> {

    constructor() { super('congregations') }

    run(id: string, congregation: Congregation): Observable<Congregation> {
        return this.http.delete<Congregation>(this.baseUrl().concat(`/${id}`), {
            body: congregation
        });
    }
}