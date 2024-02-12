import { EventEmitter, inject } from "@angular/core";
import { NgxSpinnerService } from "ngx-spinner";
import { ToastrService } from "ngx-toastr";
import { Page } from "src/app/components/paginate/pagination/page.entity";
import { Pageable } from "src/app/components/paginate/pagination/pageable.entity";
import { Pagination } from "src/app/models/pagination.entity";

export abstract class IPaginater {
    
    protected spinner: NgxSpinnerService = inject(NgxSpinnerService);
    protected toastr: ToastrService = inject(ToastrService);

    protected readonly complete: EventEmitter<any> = new EventEmitter<any>();
    protected emptyData: boolean = false;
    protected finally: boolean = false;
    protected suchNotFound: boolean = false;
    
    pageable!: Pageable;

    setPageable(currentPage: number, totalPages: number): void {
        const page = new Page({ label: currentPage, isCurrent: true });
        this.pageable = new Pageable({
            currentPage: page,
            totalPages: totalPages
        });
    }
   
    done(): EventEmitter<any> { return this.complete }

    isEmpty(): boolean { return this.emptyData }

    notFound(): boolean { return this.suchNotFound }

    isFinally(): boolean { return this.finally }

    abstract run(pagination: Pagination): void;
}