import { Injectable } from "@angular/core";
import { Shepherd } from "src/app/models/shepherd.entity";

@Injectable()
export class ParseDataToShepherdService {

    run(step1: any, step2: any): Shepherd {
        return new Shepherd({
            name: step1.value.name,
            location: step1.value.location,
            signature: step2.value.signature
        })
    }
}