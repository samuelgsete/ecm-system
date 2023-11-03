import { EventEmitter } from "@angular/core";

export abstract class IDestroyerImage {
    
    protected complete: EventEmitter<any> = new EventEmitter<any>();
    protected isDeleting: boolean = false;

    done(): EventEmitter<any> { return this.complete }

    deleting(): boolean { return this.isDeleting }

    abstract run(publicId: string): void 
}