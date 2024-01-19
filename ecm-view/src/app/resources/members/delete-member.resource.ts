import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Member } from "src/app/models/member.entity";
import { IRemoverResource } from "../interfaces/remover.resource";

@Injectable()
export class DeleteMemberResource extends IRemoverResource<Member> {

    constructor() { super('members') }

    run(id: string, member: Member): Observable<Member> {
        return this.http.delete<Member>(this.baseUrl().concat(`/${id}`), {
            body: member
        });
    }
}