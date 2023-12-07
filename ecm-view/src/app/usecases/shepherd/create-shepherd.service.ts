import { Injectable } from "@angular/core";
import { ToastrService } from "ngx-toastr";
import { NgxSpinnerService } from "ngx-spinner";

import { ICreater } from "../interfaces/creater";
import { CreateShepherdResource } from "src/app/resources/shepherd/create-shepherd.resource";
import { Shepherd } from "src/app/models/shepherd.entity";

@Injectable()
export class CreateShepherdService extends ICreater {

    constructor(
        private readonly toastr: ToastrService,
        private readonly spinner: NgxSpinnerService,
        private readonly create: CreateShepherdResource
    ) { super() }

    override run(data: any): void {
        this.spinner.show();
        const shepherd = new Shepherd({
            id: data.id,
            name: data.name,
            location: data.location,
            signature: data.signature,
            createdAt: data.createdAt,
            updatedAt: data.updatedAt
        });
        this.create.run(shepherd).subscribe({
            next: (response) => {
                this.toastr.success('Configuração definida com sucesso', 'Tudo ok! :)', { 
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