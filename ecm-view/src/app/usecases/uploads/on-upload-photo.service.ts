import { Injectable } from "@angular/core";

import { UploadPhotoService } from "./upload-photo.service";
import { of } from "rxjs";

@Injectable()
export class OnUploadPhotoService {

    constructor(private readonly upload: UploadPhotoService) {}

    run(event: any) {
        const file = event.target.files[0]
        const formData = new FormData();
        formData.append('img', file);
        this.upload.run(formData);
    }
}