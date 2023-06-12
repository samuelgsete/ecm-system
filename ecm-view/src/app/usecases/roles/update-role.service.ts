import { Injectable } from "@angular/core";
import { ToastrService } from "ngx-toastr";
import { NgxSpinnerService } from "ngx-spinner";

import { UpdateOneService } from "../models/update-one.service";
import { Role } from "src/app/models/role.entity";
import { UpdateRoleResource } from "src/app/resources/roles/update-role-resource";

@Injectable()
export class UpdateRoleService extends UpdateOneService<Role> {
    
    public constructor(
        private readonly toastr: ToastrService,
        private readonly spinner: NgxSpinnerService,
        private readonly update: UpdateRoleResource
    ) { super() }

    public override run(data: any): void {
        this.spinner.show();
        const role: Role = new Role({
            id: data.id,
            name: data.name,
            createdAt: data.createdAt,
            updatedAt: data.updatedAt
        });
        this.update.run(role.id, role).subscribe({
            next: (response) => {
                this.toastr.success('Dados atualizado com sucesso', 'Feito! :)', { 
                    progressBar: true,
                    positionClass: 'toast-bottom-center'
                });
                this.complete.emit(response);
            },
            error: (eventErr) => {
                this.toastr.error('Os dados não foram alterados', 'Há não :(', { 
                    progressBar: true,
                    positionClass: 'toast-bottom-center'
                });
            }
        }).add(() => {
            this.spinner.hide();
        })
    }
}