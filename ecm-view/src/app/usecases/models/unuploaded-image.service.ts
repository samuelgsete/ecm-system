import { EventEmitter } from "@angular/core";

export abstract class UnuploadedImageService {
    
    protected complete: EventEmitter<any> = new EventEmitter<any>();
    protected progress: boolean = true;

    public done(): EventEmitter<any> { return this.complete }

    public inProgress(): boolean { return this.progress; }

    public abstract run(nameFile: string): void
}