import { EventEmitter, inject } from "@angular/core";
import { NgxSpinnerService } from "ngx-spinner";
import { ToastrService } from "ngx-toastr";

export abstract class IFinderFirst<T> {
   
    protected spinner: NgxSpinnerService = inject(NgxSpinnerService);
    protected toastr: ToastrService = inject(ToastrService);
    protected complete: EventEmitter<T> = new EventEmitter<T>();
    protected progress: boolean = false;

    public done(): EventEmitter<T> { return this.complete }

    public inProgress(): boolean { return this.progress; }

    public abstract run(): void
}