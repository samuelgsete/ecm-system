import { Injectable, inject } from "@angular/core";
import { Observable, map } from "rxjs";

import { Pagination } from "src/app/models/pagination.entity";
import { ListCongregationsPaginatedResource } from "src/app/resources/congregations/list-congregations-paginated.resource";
import { IPaginater } from "../interfaces/paginater";
import { Role } from "src/app/models/role.entity";

@Injectable()
export class ListCongregationsPaginatedService extends IPaginater {

    private paginater = inject(ListCongregationsPaginatedResource);

    run(pagination: Pagination): Observable<Role[]> {
        return this.paginater.run(pagination).pipe(
            map(response => {
                pagination.total = response.totalElements;
                this.emptyOrNotFound(pagination.total, pagination.search);
                this.setPageable(response.number, response.totalPages);                     
                return response.content;
            })
        )
    }
}