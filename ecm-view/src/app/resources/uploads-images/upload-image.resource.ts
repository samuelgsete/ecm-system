import { Injectable } from "@angular/core";
import { HttpParams } from "@angular/common/http";
import { Observable } from "rxjs";
import { IUploaderImage } from "../interfaces/uploader-image";
import { ImageModel } from "src/app/models/image-model.entity";
import { Cropped } from "src/app/models/cropped.entity";

@Injectable()
export class UploadImageResource extends IUploaderImage {

    constructor() { super('uploads') }

    run(imageFile: FormData, cropped: Cropped, path: string): Observable<ImageModel> {
        const _params = new HttpParams()
            .set('width', cropped.width)
            .set('height', cropped.height)
            .set('positionX1', cropped.positionX1)
            .set('positionY1', cropped.positionY1)
            .set('path', path)
        return this.http.post<ImageModel>(this.getBaseUrl().concat('/cloud'), imageFile, {
            params: _params
        });
    }
}