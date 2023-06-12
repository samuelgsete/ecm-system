import { EventEmitter } from "@angular/core";

export abstract class findByCodeService<T> {
    
    protected complete: EventEmitter<T> = new EventEmitter<T>();
    protected progress: boolean = false;

    public done(): EventEmitter<T> { return this.complete }

    public isFinish(): boolean { return this.progress; }

    public abstract run(code: string): void
}