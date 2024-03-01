import { Observable } from "rxjs";
import { HttpRequest } from "./http-request.resource";

export abstract class IFinderAllResource<T> extends HttpRequest {

    private controller: string = '';
    private action: string = '';

    constructor(_controller: string, _action: string) {
        super();
        this.controller = _controller;
        this.action = _action;
    }

    baseURL(): string {
        return this.localUrl.concat(`${this.controller}/${this.action}`);
    }

    abstract run(): Observable<T[]>
}