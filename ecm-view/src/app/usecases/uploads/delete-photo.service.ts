import { Injectable } from "@angular/core";
import { ToastrService } from "ngx-toastr";
import Swal from "sweetalert2";

import { DeleteImageService } from "../models/delete-image.service";
import { DeletePhotoResource } from "src/app/resources/uploads-images/delete-photo.resource";

@Injectable()
export class DeletePhotoService extends DeleteImageService {

    public constructor(
        private readonly toastr: ToastrService,
        private readonly deletePhoto: DeletePhotoResource
    ) { super() }

    public run(publicId: string): void {
        Swal.fire({
            title: 'Tem certeza que deseja remover a Foto?',
            text: 'Você não poderá desfazer essa operação',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'SIM',
            cancelButtonText: 'NÃO'
        }).then((result) => {
            if(result.isConfirmed) {
                this.inProgress = true;
                this.deletePhoto.run(publicId).subscribe({
                    next: (response) => {
                        this.inProgress = false;
                        this.complete.emit(response);
                    },
                    error: (eventErr) => {
                        this.toastr.error('A Imagem não foi removida', 'Que pena :(', { 
                            progressBar: true,
                            positionClass: 'toast-bottom-center'
                        });
                        this.inProgress = false;
                    }
                })
            }
        })
    }
}