import { Injectable } from "@angular/core";
import { ToastrService } from "ngx-toastr";

import { DestroyerImageResource } from "src/app/resources/uploads-images/destroyer-image.resource";
import { IDestroyerImage } from "../../interfaces/destroyer-image";

@Injectable()
export class DestroyerShepherdSignatureService extends IDestroyerImage {

    constructor(
        private readonly toastr: ToastrService,
        private readonly destroyer: DestroyerImageResource
    ) { super(); }

    run(publicId: string): void {
        this.isDeleting = true;
        this.destroyer.run(publicId).subscribe({
            next: (response) => {
                this.isDeleting = false;
                this.complete.emit(response);
            },
            error: (eventErr) => {
                this.toastr.error('A Imagem não foi removida', 'Que pena :(', { 
                    progressBar: true,
                    positionClass: 'toast-bottom-center'
                });
                this.isDeleting = false;
            }
        });
    }
}