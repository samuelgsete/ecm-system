import { EventEmitter } from "@angular/core";

import { Cropped } from "src/app/models/cropped.entity";
import { ImageModel } from "src/app/models/image-model.entity";

export abstract class IUploaderImage {

    protected complete: EventEmitter<ImageModel> = new EventEmitter<ImageModel>();
    protected isUploading: boolean = false;

    done(): EventEmitter<ImageModel> { return this.complete }

    uploading(): boolean { return this.isUploading }

    public abstract run(imageFile: FormData, cropped: Cropped): void
}