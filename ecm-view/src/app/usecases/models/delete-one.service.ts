import { EventEmitter } from "@angular/core";

export abstract class DeleteOne<T> {

    protected complete: EventEmitter<T> = new EventEmitter<T>();
    protected progress: boolean = true;

    public done(): EventEmitter<T> { return this.complete }

    public inProgress(): boolean { return this.progress; }

    public abstract run(id: number, object: T): void
}