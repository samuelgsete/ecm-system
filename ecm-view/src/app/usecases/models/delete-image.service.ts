import { EventEmitter } from "@angular/core";

export abstract class DeleteImageService {

    protected complete: EventEmitter<any> = new EventEmitter<any>();
    protected inProgress: boolean = false;

    public done(): EventEmitter<any> { return this.complete }

    public isInProgress(): boolean { return this.inProgress; }

    public abstract run(publicId: string): void
}