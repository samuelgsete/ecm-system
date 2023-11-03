import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

import { Member } from "src/app/models/member.entity";
import { ICreaterResource } from "../interfaces/creater.resource";

@Injectable()
export class CreateMemberResource extends ICreaterResource<Member> {

    constructor(private readonly http: HttpClient) { super('members') }

    run(member: Member): Observable<any> {
        return this.http.post<Member>(this.baseUrl(), member, { 
            reportProgress: true, 
            observe: 'events' 
        });
    }
}