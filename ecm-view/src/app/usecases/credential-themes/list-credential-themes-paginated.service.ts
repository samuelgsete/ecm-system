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
                pagination.total = response.totalElements;            
                this.setPageable(response.number, response.totalPages);
                return response.content;
            })
        );
    }
}