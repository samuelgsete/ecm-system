import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { IRemoverManyResource } from "../interfaces/remover-many.resource";

@Injectable({
    providedIn: 'root'
})
export class DeleteManyRolesResource extends IRemoverManyResource {

    constructor() { super('roles','many') }

    run(): Observable<void> {
        return this.http.delete<void>(this.baseUrl());
    }
}