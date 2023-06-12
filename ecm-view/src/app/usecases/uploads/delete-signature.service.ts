import { Injectable } from "@angular/core";
import { ToastrService } from "ngx-toastr";
import Swal from "sweetalert2";

import { DeleteImageService } from "../models/delete-image.service";
import { DeleteSignatureResource } from "src/app/resources/uploads-images/delete-signature.resource";

@Injectable()
export class DeleteSignatureService extends DeleteImageService {

    public constructor(
        private readonly toastr: ToastrService,
        private readonly deleteSignature: DeleteSignatureResource
    ) { super() }

    public override run(publicId: string): void {
        Swal.fire({
            title: 'Tem certeza que deseja remover a Assinatura?',
            text: 'Você não poderá desfazer essa operação',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'SIM',
            cancelButtonText: 'NÃO'
        }).then((result) => {
            if(result.isConfirmed) {
                this.inProgress = true;
                this.deleteSignature.run(publicId).subscribe({
                    next: (response) => {
                        this.inProgress = false
                        this.complete.emit(response);
                    },
                    error: (eventErr) => {
                        this.toastr.error('A Imagem não foi removida', 'Que pena :(', { 
                            progressBar: true,
                            positionClass: 'toast-bottom-center'
                        });
                        this.inProgress = false
                    }
                })
            }
        })
    }
}