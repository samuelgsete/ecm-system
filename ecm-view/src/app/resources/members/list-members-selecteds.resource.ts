import { Injectable, inject } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

import { Member } from "src/app/models/member.entity";

@Injectable()
export class ListMembersSelectedsResource {

    private http = inject(HttpClient);
    private url: string = 'http://localhost:8090/api/v1/members/selecteds';

    run(): Observable<Member[]> {
        return this.http.get<Member[]>(this.url);
    }
}