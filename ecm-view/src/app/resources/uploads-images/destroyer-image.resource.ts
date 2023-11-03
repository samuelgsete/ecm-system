import { Observable } from "rxjs";
import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";

import { IDestroyerImage } from "../interfaces/destroyer-image";

@Injectable()
export class DestroyerImageResource extends IDestroyerImage {

    public constructor(private readonly http: HttpClient) { super('uploads') }

    public run(publicId: string): Observable<any> {
        const _params = new HttpParams().set('publicId', publicId);
        return this.http.delete<any>(this.getBaseUrl().concat('/cloud'), { 
            params: _params
        });
    }
}