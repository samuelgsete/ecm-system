import { EventEmitter, inject } from "@angular/core";
import { NgxSpinnerService } from "ngx-spinner";
import { ToastrService } from "ngx-toastr";
import { Pagination } from "src/app/models/pagination.entity";

export abstract class IPaginater {
    
    protected spinner: NgxSpinnerService = inject(NgxSpinnerService);
    protected toastr: ToastrService = inject(ToastrService);

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