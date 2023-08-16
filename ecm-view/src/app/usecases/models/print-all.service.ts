import { EventEmitter } from "@angular/core";

export abstract class PrintAll {
    
    protected isDone: EventEmitter<string | null> = new EventEmitter<string | null>();

    done(): EventEmitter<string | null> { return this.isDone }

    abstract run(): void
}