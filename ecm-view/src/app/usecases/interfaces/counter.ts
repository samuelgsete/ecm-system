import { EventEmitter } from "@angular/core";

import { CountElements } from "src/app/utils/models/count-elements.entity";

export abstract class ICounter {

    isDone: EventEmitter<CountElements> = new EventEmitter<CountElements>();

    abstract run(): void;
}