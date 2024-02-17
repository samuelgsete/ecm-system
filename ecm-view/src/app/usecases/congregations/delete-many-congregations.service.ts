import { Injectable, inject } from "@angular/core";
import Swal from "sweetalert2";

import { DeleteManyCongregationsResource } from "src/app/resources/congregations/delete-many-congregations.resource";
import { IRemoverMany } from "../interfaces/remover-many";

@Injectable()
export class DeleteManyCongregationService extends IRemoverMany {

    private deleteMany = inject(DeleteManyCongregationsResource);

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
                        this.toastr.success('Removido com sucesso', 'Tudo ok!', { 
                            progressBar: true,
                            positionClass: 'toast-bottom-center'
                        });
                    },
                    error: (eventErr) => {
                        this.toastr.error('Não foi possível remover', 'Há não!', { 
                            progressBar: true,
                            positionClass: 'toast-bottom-center'
                        });
                    }
                }).add(() => { this.spinner.hide() })
            }
        })
    }
}