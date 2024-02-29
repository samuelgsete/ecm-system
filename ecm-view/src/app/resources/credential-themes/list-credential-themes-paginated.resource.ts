import { Injectable } from "@angular/core";
import { HttpParams } from "@angular/common/http";
import { Observable } from "rxjs";

import { Pagination } from "src/app/models/pagination.entity";
import { IPaginaterResource } from "../interfaces/paginater.resource";
import { CredentialTheme } from "src/app/models/credential-theme.entity";
import { ResponsePageable } from "src/app/models/response-pageable.entity";

@Injectable()
export class ListCredentialThemesPaginatedResource extends IPaginaterResource {

    constructor() { super('credential-themes') }

   run(pagination: Pagination): Observable<ResponsePageable<CredentialTheme>> {
        const _params = new HttpParams()
            .set('search', pagination.search)
            .set('ordination', pagination.ordination)
            .set('page', pagination.pageCurrent)
            .set('size', pagination.pageSize)
        return this.http.get<ResponsePageable<CredentialTheme>>(this.baseUrl(), { params: _params });
    }
}