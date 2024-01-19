import { Injectable, inject } from "@angular/core";
import { Pagination } from "src/app/models/pagination.entity";
import { ListRolesPaginatedResource } from "src/app/resources/roles/list-roles-paginated.resource";
import { IPaginater } from "../interfaces/paginater";

@Injectable()
export class ListRolesPaginatedService extends IPaginater {

    private paginater = inject(ListRolesPaginatedResource);

    run(pagination: Pagination): void {
        this.spinner.show()
        this.paginater.run(pagination).subscribe({
            next: (response) => {
                this.emptyData = (response.totalElements == 0 && pagination.search == "") ? true : false;
                this.suchNotFound = (response.totalElements == 0 && pagination.search != "") ? true : false;
                this.complete.emit(response);
            },
            error: (eventErr) => {
                this.toastr.error('Não foi possível listar os cargos', 'Há não :(', { 
                    progressBar: true,
                    positionClass: 'toast-bottom-center'
                });
            }
        }).add(() => {
            this.spinner.hide();
            this.finally = true;
        })
    }
}