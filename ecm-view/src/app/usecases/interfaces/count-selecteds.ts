import { EventEmitter } from "@angular/core";

export abstract class ICountSelecteds {

    isDone: EventEmitter<number> = new EventEmitter<number>();

    abstract run(): void;
}