import { Observable } from "rxjs";
import { HttpRequest } from "./http-request.resource";

export abstract class IFinderFirstResource<T> extends HttpRequest {

    private controller: string = '';

    public constructor(_controller: string) {
        super();
        this.controller = _controller;
    }

    protected baseUrl(): string {
        return this.localUrl.concat(this.controller);
    }

    public abstract run(): Observable<T>;
}