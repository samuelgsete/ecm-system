import { Injectable, inject } from "@angular/core";
import Swal from "sweetalert2";

import { IRemoverMany } from "../interfaces/remover-many";
import { DeleteManyRolesResource } from "src/app/resources/roles/delete-many-roles.resource";

@Injectable()
export class DeleteManyRolesService extends IRemoverMany {

    private deleteMany = inject(DeleteManyRolesResource);

    run(): void {
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
                this.deleteMany.run().subscribe({
                    next: (response) => {
                        this.isDone.emit();
                        this.toastr.success('Os cargos foram removidos', 'Tudo ok!', { 
                            progressBar: true,
                            positionClass: 'toast-bottom-center'
                        });
                    },
                    error: (eventErr) => {
                        this.toastr.error('Não foi possível remover os cargos', 'Há não!', { 
                            progressBar: true,
                            positionClass: 'toast-bottom-center'
                        });
                    }
                }).add(() => { this.spinner.hide() })
            }
        })
    }
}