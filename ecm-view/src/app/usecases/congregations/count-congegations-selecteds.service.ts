import { EventEmitter, Injectable, inject } from "@angular/core";

import { CountCongregationsSelectedsResource } from "src/app/resources/congregations/count-congregations-selecteds.resource";

@Injectable()
export class CountCongregationsSelectedsService {

    isDone = new EventEmitter<number>();
    count = inject(CountCongregationsSelectedsResource);

    run(): void {
        this.count.run().subscribe({
            next: (response) => { this.isDone.emit(response) }
        });
    }
}