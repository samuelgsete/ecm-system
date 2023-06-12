import { Injectable } from "@angular/core";

import { UploadSignatureService } from "./upload-signature.service";

@Injectable()
export class OnUploadSiginatureService {

    constructor(private readonly upload: UploadSignatureService) {}

    run( event: any) {
        const file = event.target.files[0];
        const formData = new FormData();
        formData.append('img', file);
        this.upload.run(formData);
    }
}