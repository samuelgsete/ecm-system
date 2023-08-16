import { EventEmitter } from "@angular/core";

export abstract class PrintOne {
    
    protected isDone: EventEmitter<string | null> = new EventEmitter<string | null>();

    done(): EventEmitter<string | null> { return this.isDone }

    abstract run(id: number): void
}