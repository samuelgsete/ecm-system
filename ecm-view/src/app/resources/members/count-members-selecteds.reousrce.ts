import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable()
export class CountMembersSelectedsResource {

    url: string = 'http://localhost:8090/api/v1/members/count/selecteds';

    constructor(
        private readonly http: HttpClient
    ) {}

    run(): Observable<number> {
        return this.http.get<number>(this.url);
    }
}