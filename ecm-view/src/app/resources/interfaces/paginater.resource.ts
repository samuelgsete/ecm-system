import { Pagination } from "src/app/models/pagination.entity";
import { HttpRequest } from "./http-request.resource";
import { Observable } from "rxjs";

export abstract class IPaginaterResource extends HttpRequest {

    private controller: string = '';

    public constructor(controller: string) { 
        super();
        this.controller = controller; 
    }

    public baseUrl(): string {
        return this.localUrl.concat(this.controller);
    }

    public abstract run(pagination: Pagination): Observable<any>;
}