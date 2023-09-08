import { EventEmitter } from "@angular/core";

import { Cropped } from "src/app/models/cropped.entity";

export abstract class UploadedImageService {
    
    protected complete: EventEmitter<any> = new EventEmitter<any>();
    protected progressDone: number = 0;

    done(): EventEmitter<any> { return this.complete }

    progress(): number { return this.progressDone }

    abstract run(file: FormData, cropped: Cropped): void
}