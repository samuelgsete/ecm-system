import { Injectable } from "@angular/core";
import { HttpParams } from "@angular/common/http";
import { Observable } from "rxjs";

import { Pagination } from "src/app/models/pagination.entity";
import { IPaginaterResource } from "../interfaces/paginater.resource";
import { ResponsePageable } from "src/app/models/response-pageable.entity";
import { Congregation } from "src/app/models/congregation.entity";

@Injectable({
    providedIn: 'root'
})
export class ListCongregationsPaginatedResource extends IPaginaterResource {

    constructor() { super('congregations') }

    run(pagination: Pagination): Observable<ResponsePageable<Congregation>> {
        const _params = new HttpParams()
            .set('search', pagination.search)
            .set('ordination', pagination.ordination)
            .set('page', pagination.page)
            .set('size', pagination.size)

        return this.http.get<ResponsePageable<Congregation>>(this.baseUrl(), { params: _params });
    }
}