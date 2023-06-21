import { EventEmitter } from "@angular/core";

export abstract class PatchService {
    
    complete: EventEmitter<any> = new EventEmitter<any>()
    finally: boolean = false;

    done(): EventEmitter<any> { return this.complete }

    isFinally(): boolean { return this.finally }

    abstract run(id: number): void
}