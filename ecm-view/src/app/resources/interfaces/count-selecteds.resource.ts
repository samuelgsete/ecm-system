import { Observable } from "rxjs";
import { HttpRequest } from "./http-request.resource";

export abstract class ICountSelectedsResource extends HttpRequest {

    private controller = '';
    private action = '';

    constructor(_controller: string, _action: string) {
        super();
        this.controller = _controller;
        this.action = _action;
    }

    baseUrl(): string {
        return this.localUrl.concat(`${this.controller}/${this.action}`);
    }

    abstract run(): Observable<number>
}