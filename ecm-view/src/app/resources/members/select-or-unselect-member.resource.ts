import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

import { ISelectOrUnselectResource } from "../interfaces/select-or-unselect.resource";
import { Member } from "src/app/models/member.entity";

@Injectable({
    providedIn: 'root'
})
export class SelectOrUnselectMemberResource extends ISelectOrUnselectResource<Member> {

    constructor() { super('members') }

    run(id: string, isSelected: boolean): Observable<Member> {
        const selected = isSelected ? 1 : 0;
        return this.http.patch<Member>(this.baseUrl().concat(`/${id}?selected=${selected}`), {});
    }
}