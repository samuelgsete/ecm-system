import { Injectable } from "@angular/core";

import { Role } from "src/app/models/role.entity";

@Injectable()
export class SelectRoleComparatorService {

    run(r1: Role, r2: Role): boolean {
        return r1.name == r2.name ? true: false;
    }
}