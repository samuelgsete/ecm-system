import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";
import { Observable } from "rxjs";

import { ListPaginatedResource } from "../models/list-paginated.resource";
import { Pagination } from "src/app/models/pagination.entity";

@Injectable()
export class ListCongregationsPaginatedResource extends ListPaginatedResource {

    public constructor(private readonly http: HttpClient) { super('congregations') }

    public run(pagination: Pagination): Observable<any> {
        const _params = new HttpParams()
            .set('search', pagination.search)
            .set('ordination', pagination.ordination)
            .set('page', pagination.page)
            .set('size', pagination.size)

        return this.http.get<any>(this.getBaseUrl(), { params: _params });
    }
}