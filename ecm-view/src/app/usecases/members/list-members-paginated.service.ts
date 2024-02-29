import { Injectable, inject } from "@angular/core";
import { Observable, map } from "rxjs";

import { Pagination } from "src/app/models/pagination.entity";
import { ListMembersPaginatedResource } from "src/app/resources/members/list-members-paginated.resource";
import { IPaginater } from "../interfaces/paginater";
import { Member } from "src/app/models/member.entity";

@Injectable()
export class ListMembersPaginatedService extends IPaginater {

    private paginater = inject(ListMembersPaginatedResource);
  
    run(pagination: Pagination): Observable<Member[]>  {
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