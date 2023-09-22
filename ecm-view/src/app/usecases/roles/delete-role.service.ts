import { Injectable } from "@angular/core";
import { ToastrService } from "ngx-toastr";
import { NgxSpinnerService } from "ngx-spinner";
import Swal from "sweetalert2";

import { DeleteOne } from "../models/delete-one.service";
import { Role } from "src/app/models/role.entity";
import { DeleteRoleResource } from "src/app/resources/roles/delete-role.resource";

@Injectable()
export class DeleteRoleService extends DeleteOne<Role> {

    constructor(
        protected readonly toastr: ToastrService,
        protected readonly spinner: NgxSpinnerService,
        protected readonly deleteOne: DeleteRoleResource
    ) { super() }

    run(id: string, role: Role): void {
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
                this.deleteOne.run(id, role).subscribe({
                    next: (response) => {
                        this.toastr.success('O cargo foi removido', 'Tudo ok!', { 
                            progressBar: true,
                            positionClass: 'toast-bottom-center'
                        })
                        this.complete.emit(response)
                    },
                    error: (eventErr) => {
                        this.toastr.error('Não foi possível remover o cargo', 'Que pena :(', { 
                            progressBar: true,
                            positionClass: 'toast-bottom-center'
                        });
                    }
                }).add(() => this.spinner.hide())
            }
        })
    }
}