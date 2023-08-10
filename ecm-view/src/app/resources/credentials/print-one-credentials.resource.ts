import { HttpClient, HttpResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable()
export class PrintOneCredentialsResource {

    private url: string = 'http://localhost:8090/api/v1/credentials';

    constructor(private readonly http: HttpClient) {}

    run(id: number): Observable<HttpResponse<string>> {
        return this.http.get<string>(this.url.concat(`/${id}/print`), {
            observe: 'response',
            responseType: 'text' as 'json'
        });
    }
}