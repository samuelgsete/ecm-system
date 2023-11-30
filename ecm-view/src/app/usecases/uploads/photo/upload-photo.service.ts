import { Injectable } from "@angular/core";
import { ToastrService } from "ngx-toastr";

import { Cropped } from "src/app/models/cropped.entity";
import { UploadImageResource } from "src/app/resources/uploads-images/upload-image.resource";
import { PHOTO_FOLDER_PATH } from "../upload-folder-path";
import { IUploaderImage } from "../../interfaces/uploader-image";

@Injectable()
export class UploadPhotoService extends IUploaderImage {
    
    constructor(
        private readonly toastr: ToastrService,
        private readonly upload: UploadImageResource
    ) { super() }

   
    run(imageFile: FormData, cropped: Cropped): void {
        this.isUploading = true;
        this.upload.run(imageFile, cropped, PHOTO_FOLDER_PATH.prod).subscribe({
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