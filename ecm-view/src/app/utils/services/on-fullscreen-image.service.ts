import { Injectable } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";

import { ImageModel } from "src/app/models/image-model.entity";
import { ImageFullscreenComponent } from "../components/image-fullscreen/image-fullscreen.component";

@Injectable()
export class OnFullScreenImage {

    constructor(private readonly modal: MatDialog) {}

    run(_image: ImageModel): void {
        this.modal.open(ImageFullscreenComponent, {
            data: { image: _image }
        })
    }
}