import { Injectable, inject } from "@angular/core";
import { Observable, map } from "rxjs";

import { Pagination } from "src/app/models/pagination.entity";
import { ListCongregationsPaginatedResource } from "src/app/resources/congregations/list-congregations-paginated.resource";
import { IPaginater } from "../interfaces/paginater";
import { Congregation } from "src/app/models/congregation.entity";

@Injectable()
export class ListCongregationsPaginatedService extends IPaginater {

    private paginater = inject(ListCongregationsPaginatedResource);

    run(pagination: Pagination): Observable<Congregation[]> {
        return this.paginater.run(pagination).pipe(
            map(response => {
                const search = pagination.search;
                const ordination = pagination.ordination;
                const pageCurrent = response.number;
                const pageSize = response.size;
                this.setParamsURL(search, ordination, pageCurrent, pageSize);
                this.setPageable(pageCurrent, pageSize, response.totalPages, response.totalElements);

                pagination.totalElements = response.totalElements;
                this.emptyOrNotFound(pagination.totalElements, pagination.search);                   
                return response.content;
            })
        )
    }
}