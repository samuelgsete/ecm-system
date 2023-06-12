import { Injectable } from "@angular/core";
import { ToastrService } from "ngx-toastr";
import { NgxSpinnerService } from "ngx-spinner";

import { CreateService } from "../models/create.service";
import { Role } from "src/app/models/role.entity";
import { CreateRoleResource } from "src/app/resources/roles/create-role.resource";

@Injectable()
export class CreateRoleService extends CreateService  {

    public constructor(
        private readonly toastr: ToastrService,
        private readonly spinner: NgxSpinnerService,
        private readonly create: CreateRoleResource
    ) { super() }

    public override run(data: any): void {
        this.spinner.show();
        const role: Role = new Role({
            id: data.id,
            name: data.name,
            createdAt: data.createdAt,
            updatedAt: data.updatedAt
        });
        this.create.run(role).subscribe({
            next: (response) => {
                this.toastr.success('Cargo criado com sucesso', 'Tudo ok! :)', { 
                    progressBar: true,
                    positionClass: 'toast-bottom-center'
                });
                this.complete.emit(response);
            },
            error: (eventErr) => {
                this.toastr.error('O Cargo não foi criado', 'Há não :(', { 
                    progressBar: true,
                    positionClass: 'toast-bottom-center'
                });
            }
        }).add(() => {
            this.spinner.hide();
        })
    }
}