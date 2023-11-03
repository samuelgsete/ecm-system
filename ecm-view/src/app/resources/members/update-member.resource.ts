import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";

import { Member } from "src/app/models/member.entity";
import { IUpdaterResource } from "../interfaces/updater.resource";

@Injectable()
export class UpdateMemberResource extends IUpdaterResource<Member> {

    constructor(private readonly http: HttpClient) {
        super('members');
    }

    run(id: string, member: Member): Observable<Member> {
        return this.http.put<Member>(this.baseUrl().concat(`/${id}`), member);
    }
}