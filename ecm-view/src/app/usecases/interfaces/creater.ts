import { EventEmitter, inject } from "@angular/core";
import { NgxSpinnerService } from "ngx-spinner";
import { ToastrService } from "ngx-toastr";

export abstract class ICreater {
   
    protected spinner: NgxSpinnerService = inject(NgxSpinnerService);
    protected toastr: ToastrService = inject(ToastrService);
    protected complete: EventEmitter<any> = new EventEmitter<any>();
    protected progress: boolean = false;

    public done(): EventEmitter<any> { return this.complete }

    public isFinish(): boolean { return this.progress; }

    public abstract run(data: any): void
}