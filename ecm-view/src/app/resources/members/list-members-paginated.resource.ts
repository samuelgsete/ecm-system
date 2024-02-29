import { Injectable } from "@angular/core";
import { HttpParams } from "@angular/common/http";
import { Observable } from "rxjs";

import { Pagination } from "src/app/models/pagination.entity";
import { IPaginaterResource } from "../interfaces/paginater.resource";
import { ResponsePageable } from "src/app/models/response-pageable.entity";
import { Member } from "src/app/models/member.entity";

@Injectable({
    providedIn: 'root'
})
export class ListMembersPaginatedResource extends IPaginaterResource {

    constructor() { super('members') }

    public run(pagination: Pagination): Observable<ResponsePageable<Member>> {
        const _params = new HttpParams()
            .set('search', pagination.search)
            .set('ordination', pagination.ordination)
            .set('page', pagination.pageCurrent)
            .set('size', pagination.pageSize)
        return this.http.get<ResponsePageable<Member>>(this.baseUrl(), { params: _params });
    }
}