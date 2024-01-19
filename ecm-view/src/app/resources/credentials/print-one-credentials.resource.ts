import { HttpResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpRequest } from "../interfaces/http-request.resource";

@Injectable()
export class PrintOneCredentialsResource extends HttpRequest {

    run(id: string): Observable<HttpResponse<string>> {
        return this.http.get<string>(this.localUrl.concat(`credentials/${id}/print`), {
            observe: 'response',
            responseType: 'text' as 'json'
        });
    }
}