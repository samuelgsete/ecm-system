import { Injectable } from "@angular/core";

import { UploadPhotoService } from "./upload-photo.service";

@Injectable()
export class OnFileDroppedPhotoService {

    constructor(private readonly upload: UploadPhotoService) {}

    run(files: any[]) {
        const file = files[0];
        const formData = new FormData();
        formData.append('img', file);
        //this.upload.run(formData, cropped);
    }
}