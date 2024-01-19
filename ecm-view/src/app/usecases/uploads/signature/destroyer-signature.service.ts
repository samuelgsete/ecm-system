import { Injectable } from "@angular/core";
import { IDestroyerImage } from "../../interfaces/destroyer-image";

@Injectable()
export class DestroyerSignatureService extends IDestroyerImage {

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