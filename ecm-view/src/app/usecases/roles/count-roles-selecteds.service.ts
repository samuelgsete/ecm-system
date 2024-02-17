import { inject } from "@angular/core";
import { ICountSelecteds } from "../interfaces/count-selecteds";
import { CountRolesSelectedsResource } from "src/app/resources/roles/count-roles-selecteds.resource";

export class CountRolesSelectedsService extends ICountSelecteds {

    private count = inject(CountRolesSelectedsResource);

    run(): void {
        this.count.run().subscribe({
            next: (response) => {
                this.isDone.emit(response);
            }
        })
    }
}