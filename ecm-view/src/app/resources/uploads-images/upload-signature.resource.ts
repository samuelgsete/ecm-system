import { Injectable } from "@angular/core";
import { UploadImageResource } from "../models/upload-image.resource";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";

@Injectable()
export class UploadSignatureResource extends UploadImageResource {

    constructor(private readonly http: HttpClient) {
        super('upload')
    }

    run(file: FormData): Observable<any> {
        return this.http.post<any>(this.getBaseUrl().concat(`/signature`), file , {
            reportProgress: true,
            observe: 'events'
        });
    }
}