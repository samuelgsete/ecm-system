import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

import { IUpdaterResource } from "../interfaces/updater.resource";
import { Shepherd } from "src/app/models/shepherd.entity";

@Injectable()
export class UpdateShepherdResource extends IUpdaterResource<Shepherd> {

    constructor(private readonly http: HttpClient) { super('shepherds') }

    run(id: string, shepherd: Shepherd): Observable<Shepherd> {
        return this.http.put<Shepherd>(this.baseUrl().concat(`/${id}`), shepherd);
    }
}