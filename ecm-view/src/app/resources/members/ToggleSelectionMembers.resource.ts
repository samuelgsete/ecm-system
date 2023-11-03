import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

import { HttpRequest } from "../interfaces/http-request.resource";

@Injectable()
export class ToggleSelectionMembersResource extends HttpRequest {

    constructor(private readonly http: HttpClient) { super() }

    run(isSelected: boolean): Observable<any> {
        let selected = isSelected ? 1 : 0;
        return this.http.patch<any>(this.localUrl.concat(`members/toggle-selection?selected=${selected}`), {});
    }
}