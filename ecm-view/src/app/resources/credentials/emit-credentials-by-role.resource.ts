import { HttpClient, HttpResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

import { HttpRequest } from "../interfaces/http-request.resource";

@Injectable()
export class EmitCredentialsByRoleResource extends HttpRequest {

    constructor(private readonly http: HttpClient) { super() }

    run(role: string): Observable<HttpResponse<string>> {
        return this.http.get<string>(this.localUrl.concat(`credentials/role/${role}`), {
            observe: 'response',
            responseType: 'text' as 'json'
        });
    }
}