import { Observable } from "rxjs";

import { HttpRequest } from "./http-request.resource";

export abstract class ISelectOrUnselectResource<T> extends HttpRequest {

    private controller: string = '';

    constructor(_controller: string) {
        super();
        this.controller = _controller;
    }

    protected baseUrl(): string {
        return this.localUrl.concat(this.controller);
    }

    abstract run(id: string, isSelected: boolean): Observable<T>;
}