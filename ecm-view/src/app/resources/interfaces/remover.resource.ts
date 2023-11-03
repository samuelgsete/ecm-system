import { Observable } from "rxjs";
import { HttpRequest } from "./http-request.resource";

export abstract class IRemoverResource<T> extends HttpRequest {

    private controller: string = '';
    
    public constructor(_controller: string) {
        super()
        this.controller = _controller;
    }

    public baseUrl(): string {
        return this.localUrl.concat(this.controller);
    }

    public abstract run(id: string, deletedResource: T): Observable<T>
}