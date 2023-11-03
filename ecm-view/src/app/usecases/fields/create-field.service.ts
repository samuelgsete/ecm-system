import { Injectable } from "@angular/core";
import { ToastrService } from "ngx-toastr";
import { NgxSpinnerService } from "ngx-spinner";

import { CreateService } from "../models/create.service";
import { CreateFieldResource } from "src/app/resources/fields/create-field.resource";
import { Field } from "src/app/models/field.entity";
import { Shepherd } from "src/app/models/shepherd.entity";

@Injectable()
export class CreateFieldService extends CreateService  {

    public constructor(
        private readonly toastr: ToastrService,
        private readonly spinner: NgxSpinnerService,
        private readonly create: CreateFieldResource
    ) { super() }

    public override run(data: any): void {
        this.spinner.show();
        const role = new Field({
            id: data.id,
            name: data.name,
            logo: data.logo,
            shepherd: new Shepherd({
                name: data.shepherdName,
                signature: data.shepherdSignature
            }),
            createdAt: data.createdAt,
            updatedAt: data.updatedAt
        });
        this.create.run(role).subscribe({
            next: (response) => {
                this.toastr.success('Campo criado com sucesso', 'Tudo ok! :)', { 
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