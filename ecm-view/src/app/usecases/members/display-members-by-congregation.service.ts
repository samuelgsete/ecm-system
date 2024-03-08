import { EventEmitter, Injectable, inject } from "@angular/core";
import { NgxSpinnerService } from "ngx-spinner";
import { ToastrService } from "ngx-toastr";

import { DisplayMembersByCongregationsResource } from "src/app/resources/members/display-members-by-congregations-resource";

@Injectable()
export class DisplayMembersByCongregationService {

    done: EventEmitter<string> = new EventEmitter<string>();
    private listBirthday = inject(DisplayMembersByCongregationsResource);
    private toastr = inject(ToastrService);
    private spinner = inject(NgxSpinnerService);

    run(congregation: string): void {
        this.spinner.show();
        this.listBirthday.run(congregation).subscribe({
            next: (response) => {
                this.done.emit(response.body || 'ERRO 404 - Not Found')
            },
            error: (eventErr) => {
                this.toastr.error('Não foi possível emitir a relação dos membros', 'Poxa vida :(', { 
                    progressBar: true,
                    positionClass: 'toast-bottom-center'
                });
            }
        }).add(() => {
            this.spinner.hide();
        })
    }
}