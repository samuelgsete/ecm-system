import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";

import { ICreaterResource } from "../interfaces/creater.resource";
import { Shepherd } from "src/app/models/shepherd.entity";

@Injectable()
export class CreateShepherdResource extends ICreaterResource<Shepherd> {

    constructor(private readonly http: HttpClient) { super('shepherds') }

    run(shepherd: Shepherd): Observable<any> {
        return this.http.post<any>(this.baseUrl(), shepherd);
    }
}