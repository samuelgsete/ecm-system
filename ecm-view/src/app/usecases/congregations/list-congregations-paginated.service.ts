import { Injectable, inject } from "@angular/core";
import { Pagination } from "src/app/models/pagination.entity";
import { ListCongregationsPaginatedResource } from "src/app/resources/congregations/list-congregations-paginated.resource";
import { IPaginater } from "../interfaces/paginater";

@Injectable()
export class ListCongregationsPaginatedService extends IPaginater {

    private paginater = inject(ListCongregationsPaginatedResource);

    run(pagination: Pagination): void {
        this.spinner.show();
        this.paginater.run(pagination).subscribe({
            next: (response) => {
                this.emptyData = (response.totalElements == 0 && pagination.search == "") ? true : false;
                this.suchNotFound = (response.totalElements == 0 && pagination.search != "") ? true : false;
                this.complete.emit(response);
            },
            error: (eventErr) => {
                this.toastr.error('Não foi possível listar as congregações', 'Poxa vida :(', { 
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