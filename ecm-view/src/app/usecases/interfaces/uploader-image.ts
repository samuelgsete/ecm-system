import { EventEmitter, inject } from "@angular/core";
import { ToastrService } from "ngx-toastr";
import { Cropped } from "src/app/models/cropped.entity";
import { ImageModel } from "src/app/models/image-model.entity";
import { UploadImageResource } from "src/app/resources/uploads-images/upload-image.resource";

export abstract class IUploaderImage {

    protected toastr = inject(ToastrService);
    protected uploader = inject(UploadImageResource);
    protected complete: EventEmitter<ImageModel> = new EventEmitter<ImageModel>();
    protected isUploading: boolean = false;

    done(): EventEmitter<ImageModel> { return this.complete }

    uploading(): boolean { return this.isUploading }

    public abstract run(imageFile: FormData, cropped: Cropped): void
}