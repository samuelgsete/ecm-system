import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

import { Member } from "src/app/models/member.entity";
import { DeleteResource } from "../models/delete.resource";

@Injectable()
export class DeleteMemberResource extends DeleteResource<Member> {
   
    constructor(private readonly http: HttpClient) { super('members') }

    run(id: number, member: Member): Observable<Member> {
        return this.http.delete<Member>(this.getBaseUrl().concat(`/${id}`), {
            body: member
        });
    }
}