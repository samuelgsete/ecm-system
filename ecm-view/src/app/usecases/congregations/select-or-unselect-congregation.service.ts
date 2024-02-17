import { EventEmitter, Injectable, inject } from "@angular/core";
import { Congregation } from "src/app/models/congregation.entity";

import { SelectOrUnselectCongregationResource } from "src/app/resources/congregations/select-or-unselecte-congregation.resource";

@Injectable()
export class SelectOrUnselecteCongregationService {

    isDone = new EventEmitter<Congregation>();
    protected readonly selectOrUnselect = inject(SelectOrUnselectCongregationResource);

    run(id: string, selected: boolean) {
        return this.selectOrUnselect.run(id, selected).subscribe({
            next: (response) => { this.isDone.emit(response) }
        })
    }
}