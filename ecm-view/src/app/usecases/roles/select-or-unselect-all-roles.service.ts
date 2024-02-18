import { Injectable, inject } from "@angular/core";
import { SelectOrUnselectAll } from "../interfaces/select-or-unselect-all";
import { SelectOrUnselectAllRolesResource } from "src/app/resources/roles/select-or-unselect-all-roles.resource";

@Injectable()
export class SelectOrUnselectAllRolesService extends SelectOrUnselectAll {

    selectOrUnselectAll = inject(SelectOrUnselectAllRolesResource);

    run(isSelected: boolean): void {
        this.selectOrUnselectAll.run(isSelected).subscribe({
            next: (response) => { this.isDone.emit() }
        })
    }
}