import { EventEmitter, inject } from "@angular/core";
import { NgxSpinnerService } from "ngx-spinner";
import { ToastrService } from "ngx-toastr";

export abstract class IRemoverMany {
    
    protected spinner: NgxSpinnerService = inject(NgxSpinnerService);
    protected toastr: ToastrService = inject(ToastrService);
    isDone: EventEmitter<void> = new EventEmitter<void>();

    abstract run(): void;
}