import { EventEmitter } from "@angular/core";

export abstract class UploadedImageService {
    
    protected complete: EventEmitter<any> = new EventEmitter<any>();
    protected progressDone: number = 0;

    public done(): EventEmitter<any> { return this.complete }

    public progress(): number { return this.progressDone }

    public abstract run(file: FormData): void
}