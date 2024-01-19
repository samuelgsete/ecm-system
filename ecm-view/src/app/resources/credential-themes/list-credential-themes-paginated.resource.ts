import { Injectable } from "@angular/core";
import { HttpParams } from "@angular/common/http";
import { Observable } from "rxjs";
import { Pagination } from "src/app/models/pagination.entity";
import { IPaginaterResource } from "../interfaces/paginater.resource";

@Injectable()
export class ListCredentialThemesPaginatedResource extends IPaginaterResource {

    constructor() { super('credential-themes') }

   run(pagination: Pagination): Observable<any> {
        const _params = new HttpParams()
            .set('search', pagination.search)
            .set('ordination', pagination.ordination)
            .set('page', pagination.page)
            .set('size', pagination.size)
        return this.http.get<any>(this.baseUrl(), { params: _params });
    }
}