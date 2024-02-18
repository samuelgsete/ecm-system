import {  Injectable, inject } from "@angular/core";
import { CountMembersResource } from "src/app/resources/members/count-members.resource";
import { ICounter } from "../interfaces/counter";

@Injectable()
export class CountMembersService extends ICounter {

    private counter = inject(CountMembersResource);

    run(): void {
        this.counter.run().subscribe({
            next: (response) => {
                this.isDone.emit(response);
            }
        })
    }
}