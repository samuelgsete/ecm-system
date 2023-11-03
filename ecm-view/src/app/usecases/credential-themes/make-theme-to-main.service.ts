import { EventEmitter, Injectable } from "@angular/core";
import { ToastrService } from "ngx-toastr";
import { NgxSpinnerService } from "ngx-spinner";

import { MakeThemeToMainResource } from "src/app/resources/credential-themes/make-theme-to-main.resource";

@Injectable()
export class MakeThemeToMainService  {

    private complete: EventEmitter<any> = new EventEmitter<any>()
    private finally: boolean = false;

    constructor(
        private readonly toastr: ToastrService,
        private readonly spinner: NgxSpinnerService,
        private readonly toMain: MakeThemeToMainResource
    ) {}

    done(): EventEmitter<any> { return this.complete }

    isFinally(): boolean { return this.finally }

    run(id: string): void {
        this.spinner.show()
        this.toMain.run(id).subscribe({
            next: (response) => {
                this.toastr.success('Tema alterado com sucesso', 'Tudo ok! :)', { 
                    progressBar: true,
                    positionClass: 'toast-bottom-center'
                })
                this.complete.emit(response);
            },
            error: (eventErr) => {
                this.toastr.error('O Tema não foi alterado', 'Há não :(', { 
                    progressBar: true,
                    positionClass: 'toast-bottom-center'
                });
            }
        }).add(() => { this.spinner.hide() })
    }
}