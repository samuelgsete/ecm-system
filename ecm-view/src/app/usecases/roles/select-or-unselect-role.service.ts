import { Injectable, inject } from "@angular/core";

import { Role } from "src/app/models/role.entity";
import { ISelectOrUnselect } from "../interfaces/select-or-unselect";
import { SelectOrUnselectRolesResource } from "src/app/resources/roles/select-or-unselect-role.resource";

@Injectable()
export class SelectOrUnselectRoleService extends ISelectOrUnselect<Role> {

    private selectOrUnselect = inject(SelectOrUnselectRolesResource)

    run(id: string, isSelected: boolean): void {
        this.spinner.show();
        this.selectOrUnselect.run(id, isSelected).subscribe({
            next: (response) => {
                this.isDone.emit(response);
            },
            error: (eventErr) => {
                this.toastr.error('Não foi possível selecionar o cargo', 'Que pena :(', { 
                    progressBar: true,
                    positionClass: 'toast-bottom-center'
                });
            }
        }).add(() => { this.spinner.hide() })
    }
}