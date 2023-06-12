import { Injectable } from "@angular/core";
import { ToastrService } from "ngx-toastr";
import { NgxSpinnerService } from "ngx-spinner";

import { UpdateOneService } from "../models/update-one.service";
import { Congregation } from "src/app/models/congregation.entity";
import { UpdateCongregationResource } from "src/app/resources/congregations/update-congregation.resource";

@Injectable()
export class UpdateCongregationService extends UpdateOneService<Congregation> {
    
    public constructor(
        private readonly toastr: ToastrService,
        private readonly spinner: NgxSpinnerService,
        private readonly update: UpdateCongregationResource
    ) { super() }

    public override run(data: any): void {
        this.spinner.show();
        const congregation: Congregation = new  Congregation({
            id: data.id,
            name: data.name,
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
                this.toastr.error('Os Dados não foram alterados', 'Há não :(', { 
                    progressBar: true,
                    positionClass: 'toast-bottom-center'
                });
            }
        }).add(() => {
            this.spinner.hide();
        })
    }
}