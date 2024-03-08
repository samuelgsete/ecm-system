import { Injectable } from "@angular/core";
import { HttpParams, HttpResponse } from "@angular/common/http";
import { Observable } from "rxjs";

import { HttpRequest } from "../interfaces/http-request.resource";

@Injectable({
    providedIn: 'root'
})
export class DisplayMembersByCongregationsResource extends HttpRequest {

    run(congregation: string): Observable<HttpResponse<string>> {
        const _params = new HttpParams()
            .set('congregation', congregation.toLowerCase())
        return this.http.get<string>(this.localUrl.concat('members/birthdays'), { 
            params: _params,
            observe: 'response',
            responseType: 'text' as 'json'
        });
    }
}