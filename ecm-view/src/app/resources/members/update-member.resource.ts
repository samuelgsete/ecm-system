import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";

import { UpdateResource } from "../models/update.resource";
import { Member } from "src/app/models/member.entity";

@Injectable()
export class UpdateMemberResource extends UpdateResource<Member> {

    constructor(private readonly http: HttpClient) {
        super('members');
    }

    run(id: string, member: Member): Observable<Member> {
        return this.http.put<Member>(this.getBaseUrl().concat(`/${id}`), member);
    }
}