import { EventEmitter, inject } from "@angular/core";
import { NgxSpinnerService } from "ngx-spinner";
import { ToastrService } from "ngx-toastr";

export abstract class IUpdater<T> {
    
    protected spinner: NgxSpinnerService = inject(NgxSpinnerService);
    protected toastr: ToastrService = inject(ToastrService);
    protected complete: EventEmitter<T> = new EventEmitter<T>();
    protected finally: boolean = false;

    public done(): EventEmitter<T> { return this.complete }

    public abstract run(data: any): void
}