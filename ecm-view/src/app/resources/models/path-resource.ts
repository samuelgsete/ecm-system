import { Observable } from "rxjs";
import { HttpRequest } from "./http-request.resource";

export abstract class PatchResource extends HttpRequest {

    controller: string = '';
    
    constructor(_controller: string) {
        super()
        this.controller = _controller;
    }

    getBaseUrl(): string {
        return this.localUrl.concat(this.controller);
    }

    abstract run(id: string): Observable<any>
}