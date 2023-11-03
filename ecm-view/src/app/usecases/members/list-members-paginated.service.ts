import { Injectable } from "@angular/core";
import { ToastrService } from "ngx-toastr";
import { NgxSpinnerService } from "ngx-spinner";

import { Pagination } from "src/app/models/pagination.entity";
import { ListMembersPaginatedResource } from "src/app/resources/members/list-members-paginated.resource";
import { IPaginater } from "../interfaces/paginater";

@Injectable()
export class ListMembersPaginatedService extends IPaginater {

    constructor(
        private readonly toastr: ToastrService,
        private readonly spinner: NgxSpinnerService,
        private readonly listPaginate: ListMembersPaginatedResource
    ) { super() }

    run(pagination: Pagination): void {
        this.spinner.show()
        this.finally = false;
        this.listPaginate.run(pagination).subscribe({
            next: (response) => {
                this.emptyData = (response.totalElements == 0 && pagination.search == "") ? true : false;
                this.suchNotFound = (response.totalElements == 0 && pagination.search != "") ? true : false;
                this.complete.emit(response);
            },
            error: (eventErr) => {
                this.toastr.error('Não foi possível listar os membros', 'Deu errado :(', { 
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