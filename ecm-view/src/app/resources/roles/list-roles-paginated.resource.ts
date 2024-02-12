import { Injectable } from "@angular/core";
import { HttpParams } from "@angular/common/http";
import { Observable } from "rxjs";

import { Pagination } from "src/app/models/pagination.entity";
import { IPaginaterResource } from "../interfaces/paginater.resource";
import { ResponsePageable } from "src/app/models/response-pageable.entity";
import { Role } from "src/app/models/role.entity";

@Injectable()
export class ListRolesPaginatedResource extends IPaginaterResource {

    constructor() { super('roles') }

    run(pagination: Pagination): Observable<ResponsePageable<Role>> {
        const _params = new HttpParams()
            .set('search', pagination.search)
            .set('ordination', pagination.ordination)
            .set('page', pagination.page)
            .set('size', pagination.size)
        return this.http.get<ResponsePageable<Role>>(this.baseUrl(), { params: _params });
    }
}