import { Injectable } from "@angular/core";
import { ToastrService } from "ngx-toastr";
import { NgxSpinnerService } from "ngx-spinner";
import Swal from "sweetalert2";

import { Congregation } from "src/app/models/congregation.entity";
import { DeleteCongregationeResource } from "src/app/resources/congregations/delete-congregation.resource";
import { IRemover } from "../interfaces/remover";

@Injectable()
export class DeleteCongregationService extends IRemover<Congregation> {

    constructor(
        protected readonly toastr: ToastrService,
        protected readonly spinner: NgxSpinnerService,
        protected readonly deleteOne: DeleteCongregationeResource
    ) { super() }

    run(id: string, congregation: Congregation): void {
        Swal.fire({
            title: 'Tem certeza que deseja remover?',
            text: 'Essa operação é irreversível',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'SIM',
            cancelButtonText: 'NÃO'
        }).then((result) => {
            if(result.isConfirmed) {
                this.spinner.show();
                this.deleteOne.run(id, congregation).subscribe({
                    next: (response) => {
                        this.toastr.success('A congregação foi removida', 'Tudo ok!', { 
                            progressBar: true,
                            positionClass: 'toast-bottom-center'
                        })
                        this.complete.emit(response)
                    },
                    error: (eventErr) => {
                        this.toastr.error('Não foi possível remover a congregação', 'Que pena :(', { 
                            progressBar: true,
                            positionClass: 'toast-bottom-center'
                        });
                    }
                }).add(() => this.spinner.hide())
            }
        })
    }
}