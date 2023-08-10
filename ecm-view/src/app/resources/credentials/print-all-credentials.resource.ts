import { HttpClient, HttpResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable()
export class PrintAllCredentialsResource {

    private url: string = 'http://localhost:8090/api/v1/credentials/print/all';

    constructor(private readonly http: HttpClient) {}

    run(): Observable<HttpResponse<string>> {
        return this.http.get<string>(this.url, {
            observe: 'response',
            responseType: 'text' as 'json'
        });
    }
}