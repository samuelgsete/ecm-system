import { EventEmitter, Injectable } from "@angular/core";

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

    run(): void {
        this.userinfo.run().subscribe(data => {
            this.isDone.emit(data)
        });
    }
}