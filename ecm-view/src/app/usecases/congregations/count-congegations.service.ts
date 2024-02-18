import { EventEmitter, Injectable, inject } from "@angular/core";

import { CountCongregationsResource } from "src/app/resources/congregations/count-congregations.resource";
import { CountElements } from "src/app/utils/models/count-elements.entity";

@Injectable()
export class CountCongregationsService {

    isDone = new EventEmitter<CountElements>();
    count = inject(CountCongregationsResource);

    run(): void {
        this.count.run().subscribe({
            next: (response) => { this.isDone.emit(response) }
        });
    }
}