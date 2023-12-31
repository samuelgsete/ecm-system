import { Injectable } from "@angular/core";
import { ToastrService } from "ngx-toastr";
import { NgxSpinnerService } from "ngx-spinner";

import { Pagination } from "src/app/models/pagination.entity";
import { ListCredentialThemesPaginatedResource } from "src/app/resources/credential-themes/list-credential-themes-paginated.resource";
import { IPaginater } from "../interfaces/paginater";

@Injectable()
export class ListCredentialThemesPaginatedService extends IPaginater {

    constructor(
        private readonly toastr: ToastrService,
        private readonly spinner: NgxSpinnerService,
        private readonly listPaginate: ListCredentialThemesPaginatedResource
    ) { super() }

    run(pagination: Pagination): void {
        this.spinner.show();
        this.listPaginate.run(pagination).subscribe({
            next: (response) => {
                this.emptyData = response.content.length == 0 ? true : false;
                this.complete.emit(response);
            },
            error: (eventErr) => {
                this.toastr.error('Não foi possível listar os temas', 'Poxa vida :(', { 
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