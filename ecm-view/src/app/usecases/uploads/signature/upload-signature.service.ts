import { Injectable } from "@angular/core";
import { Cropped } from "src/app/models/cropped.entity";
import { SIGNATURE_FOLDER_PATH } from "../upload-folder-path";
import { IUploaderImage } from "../../interfaces/uploader-image";

@Injectable()
export class UploadSignatureService extends IUploaderImage {
    
    run(imageFile: FormData, cropped: Cropped): void {
        this.isUploading = true;
        this.uploader.run(imageFile, cropped, SIGNATURE_FOLDER_PATH.prod).subscribe({
            next: (response) => {
                this.isUploading = false;
                this.complete.emit(response);
            },
            error: (eventErr) => {
                this.isUploading = false;
                this.toastr.error('Falha ao realizar o upload', 'Há não :(', { progressBar: true });
            }
        })
    }
}