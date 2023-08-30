import { Injectable } from "@angular/core";
import { ToastrService } from "ngx-toastr";
import { NgxSpinnerService } from "ngx-spinner";

import { CreateService } from "../models/create.service";
import { CreateCongregationResource } from "src/app/resources/congregations/create-congregation.resource";
import { Congregation } from "src/app/models/congregation.entity";

@Injectable()
export class CreateCongregationService extends CreateService  {

    constructor(
        private readonly toastr: ToastrService,
        private readonly spinner: NgxSpinnerService,
        private readonly create: CreateCongregationResource
    ) { super() }

    run(data: any): void {
        this.spinner.show();
        const congregation = new Congregation({
            id: data.id,
            name: data.name,
            numberOfMembers: data.numberOfMembers,
            createdAt: data.createdAt,
            updatedAt: data.updatedAt
        });
        this.create.run(congregation).subscribe({
            next: (response) => {
                this.toastr.success('Congregação criada com sucesso', 'Tudo ok! :)', { 
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