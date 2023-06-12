import { Injectable } from "@angular/core";
import { ToastrService } from "ngx-toastr";
import { NgxSpinnerService } from "ngx-spinner";

import { CreateService } from "../models/create.service";
import { CreateCongregationResource } from "src/app/resources/congregations/create-congregation.resource";
import { Congregation } from "src/app/models/congregation.entity";

@Injectable()
export class CreateCongregationService extends CreateService  {

    public constructor(
        private readonly toastr: ToastrService,
        private readonly spinner: NgxSpinnerService,
        private readonly create: CreateCongregationResource
    ) { super() }

    public run(data: any): void {
        this.spinner.show();
        const congregation: Congregation = new Congregation({
            id: data.id,
            name: data.name,
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
                this.toastr.error('A Congregaçaõ não foi criado', 'Há não :(', { 
                    progressBar: true,
                    positionClass: 'toast-bottom-center'
                });
            }
        }).add(() => {
            this.spinner.hide();
        })
    }
}