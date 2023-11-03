import { EventEmitter } from "@angular/core";
import { Pagination } from "src/app/models/pagination.entity";

export abstract class IPaginater {

    protected readonly complete: EventEmitter<any> = new EventEmitter<any>();
    protected emptyData: boolean = false;
    protected finally: boolean = false;
    protected suchNotFound: boolean = false;
   
    public done(): EventEmitter<any> { return this.complete }

    public isEmpty(): boolean { return this.emptyData }

    public notFound(): boolean { return this.suchNotFound }

    public isFinally(): boolean { return this.finally }

    public abstract run(pagination: Pagination): void;
}