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
                pagination.total = response.totalElements;            
                this.setPageable(response.number, response.totalPages);

                return response.content;
            })
        )
    }
}