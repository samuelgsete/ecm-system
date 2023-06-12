import { Injectable } from "@angular/core";

import { UploadSignatureService } from "./upload-signature.service";

@Injectable()
export class OnFileDroppedSignatureService {

    constructor(
        private readonly upload: UploadSignatureService
    ) {}

    run(files: any[]) {
        console.log(typeof files[0]);
        const file = files[0];
        const formData = new FormData();
        formData.append('img', file);
        this.upload.run(formData);
    }
}