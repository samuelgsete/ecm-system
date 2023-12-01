import { HttpClient, HttpResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

import { HttpRequest } from "../interfaces/http-request.resource";

@Injectable()
export class EmitCredencialsByCongregationResource extends HttpRequest {

    constructor(private readonly http: HttpClient) { super() }

    run(congregation: string): Observable<HttpResponse<string>> {
        var _congregation = congregation.replace(' ', '-');
        console.log(congregation, _congregation);
        return this.http.get<string>(this.localUrl.concat(`credentials/${congregation}/emit`), {
            observe: 'response',
            responseType: 'text' as 'json'
        });
    }
}