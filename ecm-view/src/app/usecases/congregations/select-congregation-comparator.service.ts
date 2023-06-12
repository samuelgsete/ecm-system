import { Injectable } from "@angular/core";

import { Congregation } from "src/app/models/congregation.entity";

@Injectable()
export class SelectCongregationComparatorService {
    run(r1: Congregation, r2: Congregation): boolean {
        return r1.name == r2.name ? true: false;
    }
}