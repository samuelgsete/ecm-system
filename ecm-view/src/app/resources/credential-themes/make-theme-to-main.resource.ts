import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { PatchResource } from '../models/path-resource';

@Injectable()
export class MakeThemeToMainResource extends PatchResource {
    
    constructor(private readonly http: HttpClient) {
        super('credential-themes')
    }

    run(id: string): Observable<any> {
        return this.http.patch<any>(this.getBaseUrl().concat(`/${id}`), {});
    }
}