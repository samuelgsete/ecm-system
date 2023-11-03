import { Observable } from "rxjs";
import { Cropped } from "src/app/models/cropped.entity";

import { ImageModel } from "src/app/models/image-model.entity";
import { HttpRequest } from "./http-request.resource";

export abstract class IUploaderImage extends HttpRequest {

    private controller: string = '';
    
    public constructor(_controller: string) {
        super()
        this.controller = _controller;
    }

    public getBaseUrl(): string {
        return this.localUrl.concat(this.controller);
    }

    public abstract run(imageFile: FormData, cropped: Cropped, path: string): Observable<ImageModel>
}