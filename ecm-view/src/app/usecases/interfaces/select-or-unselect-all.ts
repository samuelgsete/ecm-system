import { EventEmitter } from "@angular/core";

export abstract class SelectOrUnselectAll {

    isDone: EventEmitter<void> = new EventEmitter<void>();

    abstract run(isSelected: boolean): void
}