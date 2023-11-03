import { Injectable } from "@angular/core";
import { ToastrService } from "ngx-toastr";
import { NgxSpinnerService } from "ngx-spinner";

import { Role } from "src/app/models/role.entity";
import { UpdateRoleResource } from "src/app/resources/roles/update-role-resource";
import { IUpdater } from "../interfaces/updater";

@Injectable()
export class UpdateRoleService extends IUpdater<Role> {
    
    constructor(
        private readonly toastr: ToastrService,
        private readonly spinner: NgxSpinnerService,
        private readonly update: UpdateRoleResource
    ) { super() }

    run(data: any): void {
        this.spinner.show();
        const role = new Role({
            id: data.id,
            name: data.name,
            numberOfMembers: data.numberOfMembers,
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