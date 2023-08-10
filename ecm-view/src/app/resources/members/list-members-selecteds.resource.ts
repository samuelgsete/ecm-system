import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

import { Member } from "src/app/models/member.entity";

@Injectable()
export class ListMembersSelectedsResource {

    url: string = 'http://localhost:8090/api/v1/members/selecteds';

    constructor(
        private readonly http: HttpClient
    ) {}

    run(): Observable<Member[]> {
        return this.http.get<Member[]>(this.url);
    }
}