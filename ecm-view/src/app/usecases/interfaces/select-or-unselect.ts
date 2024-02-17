import { EventEmitter, inject } from "@angular/core";
import { NgxSpinnerService } from "ngx-spinner";
import { ToastrService } from "ngx-toastr";

export abstract class ISelectOrUnselect<T> {

    isDone: EventEmitter<T> = new EventEmitter<T>();
    protected spinner: NgxSpinnerService = inject(NgxSpinnerService);
    protected toastr: ToastrService = inject(ToastrService);

    abstract run(id: string, isSelected: boolean): void;
}