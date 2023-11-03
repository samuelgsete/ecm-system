import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class MakeThemeToMainResource {

    private baseUrl: string = 'http://localhost:8090/api/v1/credential-themes';
    
    constructor(private readonly http: HttpClient) {}

    run(id: string): Observable<any> {
        return this.http.patch<any>(this.baseUrl.concat(`/${id}`), {});
    }
}