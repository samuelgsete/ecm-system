import { HttpClient, HttpResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable()
export class PrintOneCredentialsResource {

    private baseUrl: string = 'http://localhost:8090/api/v1/credentials';

    constructor(private readonly http: HttpClient) {}

    run(id: string): Observable<HttpResponse<string>> {
        return this.http.get<string>(this.baseUrl.concat(`/${id}/print`), {
            observe: 'response',
            responseType: 'text' as 'json'
        });
    }
}