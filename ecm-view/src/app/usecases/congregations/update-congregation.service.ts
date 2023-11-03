import { Injectable } from "@angular/core";
import { ToastrService } from "ngx-toastr";
import { NgxSpinnerService } from "ngx-spinner";

import { Congregation } from "src/app/models/congregation.entity";
import { UpdateCongregationResource } from "src/app/resources/congregations/update-congregation.resource";
import { IUpdater } from "../interfaces/updater";

@Injectable()
export class UpdateCongregationService extends IUpdater<Congregation> {
    
    constructor(
        private readonly toastr: ToastrService,
        private readonly spinner: NgxSpinnerService,
        private readonly update: UpdateCongregationResource
    ) { super() }

    run(data: any): void {
        this.spinner.show();
        const congregation = new  Congregation({
            id: data.id,
            name: data.name,
            numberOfMembers: data.numberOfMembers,
            createdAt: data.createdAt,
            updatedAt: data.updatedAt
        });
        this.update.run(congregation.id, congregation).subscribe({
            next: (response) => {
                this.toastr.success('Dados atualizado com sucesso', 'Tuto Ok! :)', { 
                    progressBar: true,
                    positionClass: 'toast-bottom-center'
                });
                this.complete.emit(response);
            },
            error: (eventErr) => {
                this.toastr.error(eventErr.error.message, `ERRO ${eventErr.error.code}`, { 
                    progressBar: true,
                    positionClass: 'toast-bottom-center'
                });
            }
        }).add(() => {
            this.spinner.hide();
        })
    }
}