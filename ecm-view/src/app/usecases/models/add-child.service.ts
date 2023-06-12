import { EventEmitter } from "@angular/core";

export abstract class AddChildService<T> {
    
    protected complete: EventEmitter<T[]> = new EventEmitter<T[]>();
    protected progress: boolean = true;

    public done(): EventEmitter<T[]> { return this.complete }

    public inProgress(): boolean { return this.progress; }

    public abstract run(parentId: number, childObject: T): void
}