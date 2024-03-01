import { inject } from "@angular/core";
import { ToastrService } from "ngx-toastr";
import { Observable } from "rxjs";

export abstract class IFinderAll<T> {
    
    protected toastr: ToastrService = inject(ToastrService);
    abstract run(): Observable<T[]>;
}