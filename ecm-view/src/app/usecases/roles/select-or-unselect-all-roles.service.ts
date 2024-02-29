import { Injectable, inject } from "@angular/core";
import { ISelectOrUnselectAll } from "../interfaces/select-or-unselect-all";
import { SelectOrUnselectAllRolesResource } from "src/app/resources/roles/select-or-unselect-all-roles.resource";

@Injectable()
export class SelectOrUnselectAllRolesService extends ISelectOrUnselectAll {

    private selectOrUnselectAll = inject(SelectOrUnselectAllRolesResource);

    run(isSelected: boolean): void {
        this.spinner.show();
        this.selectOrUnselectAll.run(isSelected).subscribe({
            next: (response) => { this.isDone.emit() },
            error: (eventErr) => {
                this.toastr.error('Não foi possível selecionar o cargo', 'Que pena :(', { 
                    progressBar: true,
                    positionClass: 'toast-bottom-center'
                });
            }
        }).add(() => this.spinner.hide())
    }
}