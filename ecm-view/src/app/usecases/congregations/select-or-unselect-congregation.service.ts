import { Injectable, inject } from "@angular/core";
import { Congregation } from "src/app/models/congregation.entity";

import { SelectOrUnselectCongregationResource } from "src/app/resources/congregations/select-or-unselect-congregation.resource";
import { ISelectOrUnselect } from "../interfaces/select-or-unselect";

@Injectable()
export class SelectOrUnselectCongregationService extends ISelectOrUnselect<Congregation> {

    protected readonly selectOrUnselect = inject(SelectOrUnselectCongregationResource);

    run(id: string, isSelected: boolean): void {
        this.spinner.show();
        this.selectOrUnselect.run(id, isSelected).subscribe({
            next: (response) => { this.isDone.emit(response) },
            error: (eventErr) => {
                this.toastr.error('Não foi possível selecionar o cargo', 'Que pena :(', { 
                    progressBar: true,
                    positionClass: 'toast-bottom-center'
                })
            }
        }).add(() => this.spinner.hide())
    }
}