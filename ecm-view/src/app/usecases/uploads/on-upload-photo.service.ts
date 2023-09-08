import { Injectable } from "@angular/core";

import { UploadPhotoService } from "./upload-photo.service";
import { Cropped } from "src/app/models/cropped.entity";

@Injectable()
export class OnUploadPhotoService {

    constructor(private readonly upload: UploadPhotoService) {}

    run(event: any, cropped: Cropped) {
        const file = event.target.files[0]
        const formData = new FormData();
        formData.append('img', file);
        this.upload.run(formData, cropped);
    }
}