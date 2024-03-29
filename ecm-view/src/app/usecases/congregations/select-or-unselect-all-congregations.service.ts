import { Injectable, inject } from "@angular/core";

import { ISelectOrUnselectAll } from "../interfaces/select-or-unselect-all";
import { SelectOrUnselectAllCongregationsResource } from "src/app/resources/congregations/select-or-unselect-all-congregations.resource";

@Injectable()
export class SelectOrUnselectAllCongregationsService extends ISelectOrUnselectAll {

    private selectOrUnselectAll = inject(SelectOrUnselectAllCongregationsResource);

    run(isSelected: boolean): void {
        this.spinner.show();
        this.selectOrUnselectAll.run(isSelected).subscribe({
            next: (response) => { this.isDone.emit() },
            error: (eventErr) => {
                this.toastr.error('Não foi possível selecionar a congregação', 'Que pena :(', { 
                    progressBar: true,
                    positionClass: 'toast-bottom-center'
                });
            }
        }).add(() => this.spinner.hide())
    }
}