import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { CredentialTheme } from 'src/app/models/credential-theme.entity';

@Injectable()
export class FindThemeActivatedResource {

    protected baseUrl: string = "http://localhost:8090/api/v1/credential-themes/active";

    constructor(
        protected readonly http: HttpClient
    ) {}

    run(): Observable<CredentialTheme> {
        return this.http.get<CredentialTheme>(this.baseUrl);
    }
}