import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";

import { Member } from "src/app/models/member.entity";
import { FindOneResource } from "../models/find-one.resource";

@Injectable()
export class FindOneMemberResource extends FindOneResource<Member> {

    public constructor(private readonly http: HttpClient) { super('members') }

    public override run(id: string): Observable<Member> {
        return this.http.get<Member>(this.getBaseUrl().concat(`/${id}`));
    }
}