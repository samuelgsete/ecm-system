import { EventEmitter } from "@angular/core";

export abstract class IFinderFirst<T> {
    
    protected complete: EventEmitter<T> = new EventEmitter<T>();
    protected progress: boolean = false;

    public done(): EventEmitter<T> { return this.complete }

    public inProgress(): boolean { return this.progress; }

    public abstract run(): void
}