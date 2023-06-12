import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { UploadImageResource } from "../models/upload-image.resource";
import { ImageModel } from "src/app/models/image-model.entity";

@Injectable()
export class UploadPhotoResource extends UploadImageResource {

    constructor(private readonly http: HttpClient) {
        super('upload')
    }

    run(file: FormData): Observable<any> {
        return this.http.post<ImageModel>(this.getBaseUrl().concat(`/photo`), file, {
            reportProgress: true,
            observe: 'events'
        });
    }
}