import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

import { CreateResource } from "../models/create.resource";
import { Member } from "src/app/models/member.entity";

@Injectable()
export class CreateMemberResource extends CreateResource<Member> {

    public constructor(private readonly http: HttpClient) { super('members') }

    public run(member: Member): Observable<any> {
        return this.http.post<Member>(this.getBaseUrl(), member, { 
            reportProgress: true, 
            observe: 'events' 
        });
    }
}