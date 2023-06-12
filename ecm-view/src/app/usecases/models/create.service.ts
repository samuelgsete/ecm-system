import { EventEmitter } from "@angular/core";

export abstract class CreateService {
    
    protected complete: EventEmitter<any> = new EventEmitter<any>();
    protected progress: boolean = false;

    public done(): EventEmitter<any> { return this.complete }

    public isFinish(): boolean { return this.progress; }

    public abstract run(data: any): void
}