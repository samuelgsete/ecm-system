import { inject } from "@angular/core";
import { ICounter } from "../interfaces/counter";
import { CountRolesResource } from "src/app/resources/roles/count-roles.resource";

export class CountRolesService extends ICounter {

    private count = inject(CountRolesResource);

    run(): void {
        this.count.run().subscribe({
            next: (response) => {
                this.isDone.emit(response);
            }
        })
    }
}