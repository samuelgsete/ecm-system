import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpRequest } from '../interfaces/http-request.resource';

@Injectable()
export class MakeThemeToMainResource extends HttpRequest {

    run(id: string): Observable<any> {
        return this.http.patch<any>(this.localUrl.concat(`credential-themes/${id}`), {});
    }
}