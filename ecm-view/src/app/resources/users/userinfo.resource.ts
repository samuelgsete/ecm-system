import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

import { IUserResponse } from "./user-response.interface";

@Injectable()
export class UserInfoResource {

    private url: string = 'http://localhost:8080/realms/auth-ecm/protocol/openid-connect/userinfo';

    constructor(
        private readonly http: HttpClient
    ) {}

    run(): Observable<IUserResponse> {
        return this.http.get<IUserResponse>(this.url);
    }
}