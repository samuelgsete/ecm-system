import { Injectable, inject } from "@angular/core";
import { Observable, map } from "rxjs";
import { Pagination } from "src/app/models/pagination.entity";
import { ListCredentialThemesPaginatedResource } from "src/app/resources/credential-themes/list-credential-themes-paginated.resource";
import { IPaginater } from "../interfaces/paginater";
import { CredentialTheme } from "src/app/models/credential-theme.entity";

@Injectable()
export class ListCredentialThemesPaginatedService extends IPaginater {

    private paginater = inject(ListCredentialThemesPaginatedResource);

    run(pagination: Pagination): Observable<CredentialTheme[]> {
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
        );
    }
}