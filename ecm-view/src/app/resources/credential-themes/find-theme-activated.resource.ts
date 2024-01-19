import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { CredentialTheme } from 'src/app/models/credential-theme.entity';
import { HttpRequest } from '../interfaces/http-request.resource';

@Injectable()
export class FindThemeActivatedResource extends HttpRequest {

    run(): Observable<CredentialTheme> {
        return this.http.get<CredentialTheme>(this.localUrl.concat('credential-themes/active'));
    }
}