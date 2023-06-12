import { Injectable } from "@angular/core";
import { ToastrService } from "ngx-toastr";
import { NgxSpinnerService } from "ngx-spinner";

import { Pagination } from "src/app/models/pagination.entity";
import { ListPaginatedService } from "../models/list-paginated.service";
import { ListMembersPaginatedResource } from "src/app/resources/members/list-members-paginated.resource";

@Injectable()
export class ListMembersPaginatedService extends ListPaginatedService {

    public constructor(
        private readonly toastr: ToastrService,
        private readonly spinner: NgxSpinnerService,
        private readonly listPaginate: ListMembersPaginatedResource
    ) { super() }

    public run(pagination: Pagination): void {
        this.spinner.show();
        this.listPaginate.run(pagination).subscribe({
            next: (response) => {
                this.emptyData = response.content.length == 0 ? true : false;
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