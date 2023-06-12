import { EventEmitter } from "@angular/core";

export abstract class UpdateOneService<T> {
    
    protected complete: EventEmitter<T> = new EventEmitter<T>();
    protected finally: boolean = false;

    public done(): EventEmitter<T> { return this.complete }

    public isFinally(): boolean { return this.finally; }

    public abstract run(data: any): void
}