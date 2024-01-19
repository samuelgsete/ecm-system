import { HttpResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpRequest } from "../interfaces/http-request.resource";

@Injectable()
export class EmitCredencialsByCongregationResource extends HttpRequest {

    run(congregation: string): Observable<HttpResponse<string>> {
        return this.http.get<string>(this.localUrl.concat(`credentials/congregation/${congregation}`), {
            observe: 'response',
            responseType: 'text' as 'json'
        });
    }
}