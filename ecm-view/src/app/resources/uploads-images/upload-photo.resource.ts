import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient, HttpParams } from "@angular/common/http";

import { UploadImageResource } from "../models/upload-image.resource";
import { ImageModel } from "src/app/models/image-model.entity";
import { Cropped } from "src/app/models/cropped.entity";

@Injectable()
export class UploadPhotoResource extends UploadImageResource {
       
    constructor(private readonly http: HttpClient) {
        super('upload')
    }

    public override run(imgFile: FormData, cropped: Cropped): Observable<any> {
        const _params = new HttpParams()
            .set('width', cropped.width)
            .set('height', cropped.height)
            .set('positionX1', cropped.positionX1)
            .set('positionY1', cropped.positionY1)
        return this.http.post<ImageModel>(this.getBaseUrl().concat(`/photo`), imgFile, {
            reportProgress: true,
            observe: 'events',
            params: _params
        });
    }
}