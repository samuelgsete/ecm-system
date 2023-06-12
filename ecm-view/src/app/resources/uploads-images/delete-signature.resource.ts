import { Observable } from "rxjs";
import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";

import { DeleteImageResource } from "../models/delete-one-image";

@Injectable()
export class DeleteSignatureResource extends DeleteImageResource {

    public constructor(private readonly http: HttpClient) { super('delete') }

    public run(publicId: string): Observable<any> {
        const _params = new HttpParams().set('publicId', publicId);
        return this.http.delete<any>(this.getBaseUrl().concat('/signature'), { 
            params: _params
        });
    }
}