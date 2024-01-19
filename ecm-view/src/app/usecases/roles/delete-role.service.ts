import { Injectable, inject } from "@angular/core";
import Swal from "sweetalert2";

import { Role } from "src/app/models/role.entity";
import { DeleteRoleResource } from "src/app/resources/roles/delete-role.resource";
import { IRemover } from "../interfaces/remover";

@Injectable()
export class DeleteRoleService extends IRemover<Role> {

    private remover = inject(DeleteRoleResource);

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
                this.remover.run(id, role).subscribe({
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