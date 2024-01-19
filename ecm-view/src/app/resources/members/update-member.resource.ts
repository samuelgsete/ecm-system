import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Member } from "src/app/models/member.entity";
import { IUpdaterResource } from "../interfaces/updater.resource";

@Injectable()
export class UpdateMemberResource extends IUpdaterResource<Member> {

    constructor() { super('members') }

    run(id: string, member: Member): Observable<Member> {
        return this.http.put<Member>(this.baseUrl().concat(`/${id}`), member);
    }
}