import { Injectable } from "@angular/core";

import { Congregation } from "src/app/models/congregation.entity";

@Injectable()
export class SelectCongregationComparatorService {
    
    run(c1: Congregation, c2: Congregation): boolean {
        if(c2 != null) return c1.name == c2.name ? true: false;
        return false;
    }
}