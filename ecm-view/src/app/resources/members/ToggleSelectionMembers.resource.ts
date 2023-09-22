import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { HttpRequest } from "../models/http-request.resource";
import { Observable } from "rxjs";

@Injectable()
export class ToggleSelectionMembersResource extends HttpRequest {

    constructor(private readonly http: HttpClient) { super() }

    run(isSelected: boolean): Observable<any> {
        let selected = isSelected ? 1 : 0;
        return this.http.patch<any>(this.localUrl.concat(`members/toggle-selection?selected=${selected}`), {});
    }
}