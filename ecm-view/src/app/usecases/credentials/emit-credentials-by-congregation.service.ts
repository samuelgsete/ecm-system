import { EventEmitter, Injectable } from "@angular/core";
import { NgxSpinnerService } from "ngx-spinner";
import { ToastrService } from "ngx-toastr";

import { EmitCredencialsByCongregationResource } from "src/app/resources/credentials/emit-credentials-by-congregation.resource";

@Injectable()
export class EmitCredentialsByCongregationService {

    protected isDone: EventEmitter<string | null> = new EventEmitter<string | null>();

    constructor(
        protected readonly toastr: ToastrService,
        protected readonly spinner: NgxSpinnerService,
        protected readonly emit: EmitCredencialsByCongregationResource
    ) {}

    done(): EventEmitter<string | null> { return this.isDone }

    run(congregation: string): void {
        this.spinner.show();
        this.emit.run(congregation).subscribe({
            next: (response) => {
               this.isDone.emit(response.body)
            },
            error: (eventErr) => {
                this.toastr.error('Não foi possível emitir as credenciais', 'Poxa vida :(', { 
                    progressBar: true,
                    positionClass: 'toast-bottom-center'
                });
            }
        }).add(() => {
            this.spinner.hide();
        })
    }
}