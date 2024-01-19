import { EventEmitter, inject } from "@angular/core";
import { ToastrService } from "ngx-toastr";
import { DestroyerImageResource } from "src/app/resources/uploads-images/destroyer-image.resource";

export abstract class IDestroyerImage {
    
    protected toastr = inject(ToastrService);
    protected destroyer = inject(DestroyerImageResource);
    protected complete: EventEmitter<any> = new EventEmitter<any>();
    protected isDeleting: boolean = false;

    done(): EventEmitter<any> { return this.complete }

    deleting(): boolean { return this.isDeleting }

    abstract run(publicId: string): void 
}