import { Injectable, inject } from "@angular/core";
import { SelectOrUnselectAllMembersResource } from "src/app/resources/members/select-or-unselect-all-members.resource";
import { ISelectOrUnselectAll } from "../interfaces/select-or-unselect-all";

@Injectable()
export class SelectOrUnselectAllMembersService extends ISelectOrUnselectAll {

   private selectOrUnselectAll = inject(SelectOrUnselectAllMembersResource );

    run(isSelected: boolean): void {
        this.spinner.show();
        this.selectOrUnselectAll.run(isSelected).subscribe({
            next: (response) => { this.isDone.emit() },
            error: (eventErr) => {
                this.toastr.error('Não foi possível selecionar o membro', 'Que pena :(', { 
                    progressBar: true,
                    positionClass: 'toast-bottom-center'
                });
            }
        }).add(() => this.spinner.hide())
    }
}