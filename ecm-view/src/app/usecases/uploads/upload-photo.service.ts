import { Injectable } from "@angular/core";

import { ToastrService } from "ngx-toastr";
import { UploadPhotoResource } from "src/app/resources/uploads-images/upload-photo.resource";
import { UploadedImageService } from "../models/upload-image.service";
import { HttpEventType } from "@angular/common/http";

const PERCENTAGE = 100;

@Injectable()
export class UploadPhotoService extends UploadedImageService {
        
    constructor(
        private readonly toastr: ToastrService,
        private readonly upload: UploadPhotoResource
    ) { super() }

    run(file: FormData): void {
        this.upload.run(file).subscribe({
            next: (event) => {
                if(event.type == HttpEventType.UploadProgress) {
                    this.progressDone = Math.round(PERCENTAGE * event.loaded / event.total);
                }
                else if(event.type == HttpEventType.Response) {
                    this.toastr.success('Upload concluído com sucesso', 'Tudo ok! :)', { 
                        progressBar: true,
                        positionClass: 'toast-bottom-center'
                    });
                    this.progressDone = 0;
                    this.complete.emit(event.body);
                }
            },
            error: (eventErr) => {
                this.progressDone = 0;
                this.toastr.error('Falha ao realizar o upload', 'Há não :(', { progressBar: true });
            }
        })
    }
}