import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Member } from "src/app/models/member.entity";
import { IFinderResource } from "../interfaces/finder.resource";

@Injectable()
export class FindOneMemberResource extends IFinderResource<Member> {

    constructor() { super('members') }

    public override run(id: string): Observable<Member> {
        return this.http.get<Member>(this.baseUrl().concat(`/${id}`));
    }
}