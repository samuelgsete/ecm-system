import { EventEmitter, inject } from "@angular/core";
import { ToastrService } from "ngx-toastr";

export abstract class IFinder<T> {
    
    protected readonly toastr = inject(ToastrService);
    protected complete: EventEmitter<T> = new EventEmitter<T>();
    protected progress: boolean = false;

    public done(): EventEmitter<T> { return this.complete }

    public inProgress(): boolean { return this.progress; }

    public abstract run(id: string): void
}