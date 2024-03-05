import { EventEmitter, Injectable } from "@angular/core";
import { Observable, map } from "rxjs";

import { UserLogged } from "src/app/resources/users/user-logged.entity";
import { UserInfoResource } from "src/app/resources/users/userinfo.resource";

@Injectable()
export class UserInfoService {

    private isDone: EventEmitter<any> = new EventEmitter<any>();

    constructor(
        private readonly userinfo: UserInfoResource
    ) {}

    done(): EventEmitter<any> {
        return this.isDone;
    }

    run(): Observable<UserLogged> {
        return this.userinfo.run().pipe(
            map(response => {
                return new UserLogged({
                    name: response.name,
                    email: response.email,
                    username: response.preferred_username
                });
            })
        )
    }
}