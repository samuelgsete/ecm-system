import { Injectable } from "@angular/core";

import { UploadSignatureService } from "./upload-signature.service";
import { Cropped } from "src/app/models/cropped.entity";

@Injectable()
export class OnFileDroppedSignatureService {

    constructor(
        protected readonly upload: UploadSignatureService
    ) {}

    run(files: any[], cropped: Cropped) {
        console.log(typeof files[0]);
        const file = files[0];
        const formData = new FormData();
        formData.append('img', file);
        this.upload.run(formData, cropped);
    }
}