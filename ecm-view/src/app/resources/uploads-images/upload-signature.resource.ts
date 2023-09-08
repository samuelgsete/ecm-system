import { Injectable } from "@angular/core";
import { UploadImageResource } from "../models/upload-image.resource";
import { Observable } from "rxjs";
import { HttpClient, HttpParams } from "@angular/common/http";

import { Cropped } from "src/app/models/cropped.entity";

@Injectable()
export class UploadSignatureResource extends UploadImageResource {

    constructor(private readonly http: HttpClient) {
        super('upload')
    }

    run(file: FormData, cropped: Cropped): Observable<any> {
        const _params = new HttpParams()
            .set('width', cropped.width)
            .set('height', cropped.height)
            .set('positionX1', cropped.positionX1)
            .set('positionY1', cropped.positionY1)

        return this.http.post<any>(this.getBaseUrl().concat(`/signature`), file , {
            reportProgress: true,
            observe: 'events',
            params: _params
        });
    }
}