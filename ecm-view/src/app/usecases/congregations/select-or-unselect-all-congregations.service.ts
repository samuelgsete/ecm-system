import { EventEmitter, Injectable, inject } from "@angular/core";

import { SelectOrUnselectAllCongregationsResource } from "src/app/resources/congregations/select-or-unselect-all-congregations.resource";

@Injectable()
export class SelectOrUnselectAllCongregationsService {

    isDone: EventEmitter<void> = new EventEmitter<void>();
    protected readonly selectOrUnselectAll = inject(SelectOrUnselectAllCongregationsResource);

    run(isSelected: boolean): void {
        this.selectOrUnselectAll.run(isSelected).subscribe({
            next: (response) => { this.isDone.emit() }
        })
    }
}