import { EventEmitter, Injectable } from "@angular/core";
import { NgxSpinnerService } from "ngx-spinner";
import { ToastrService } from "ngx-toastr";

import { EmitCredentialsByRoleResource } from "src/app/resources/credentials/emit-credentials-by-role.resource";

@Injectable()
export class EmitCredentialsByRoleService {

    protected isDone: EventEmitter<string | null> = new EventEmitter<string | null>();

    constructor(
        protected readonly toastr: ToastrService,
        protected readonly spinner: NgxSpinnerService,
        protected readonly emit: EmitCredentialsByRoleResource
    ) {}

    done(): EventEmitter<string | null> { return this.isDone }

    run(role: string): void {
        this.spinner.show();
        this.emit.run(role).subscribe({
            next: (response) => {
               this.isDone.emit(response.body)
            },
            error: (eventErr) => {
                this.toastr.error('Não foi possível emitir as credenciais', 'Há não :(', { 
                    progressBar: true,
                    positionClass: 'toast-bottom-center'
                });
            }
        }).add(() => {
            this.spinner.hide();
        })
    }
}