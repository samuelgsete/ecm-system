import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Shepherd } from "src/app/models/shepherd.entity";
import { IFinderFirstResource } from "../interfaces/finder-first.resource";

@Injectable()
export class FindShepherdResource extends IFinderFirstResource<Shepherd> {

    constructor() { super('shepherds') }

    run(): Observable<Shepherd> {
        return this.http.get<Shepherd>(this.baseUrl());
    }    
}