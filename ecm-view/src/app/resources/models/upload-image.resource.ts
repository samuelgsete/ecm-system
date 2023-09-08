import { Observable } from "rxjs";
import { HttpRequest } from "./http-request.resource";

import { Cropped } from "src/app/models/cropped.entity";

export abstract class UploadImageResource extends HttpRequest {

    private controller: string = '';
    
    public constructor(_controller: string) {
        super()
        this.controller = _controller;
    }

    public getBaseUrl(): string {
        return this.localUrl.concat(this.controller);
    }

    public abstract run(imgFile: FormData, cropped: Cropped): Observable<any>
}