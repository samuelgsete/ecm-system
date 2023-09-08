import { Injectable } from "@angular/core";

import { UploadSignatureService } from "./upload-signature.service";
import { Cropped } from "src/app/models/cropped.entity";

@Injectable()
export class OnUploadSiginatureService {

    constructor(private readonly upload: UploadSignatureService) {}

    run(event: any, cropped: Cropped) {
        const file = event.target.files[0];
        const formData = new FormData();
        formData.append('img', file);
        this.upload.run(formData, cropped);
    }
}