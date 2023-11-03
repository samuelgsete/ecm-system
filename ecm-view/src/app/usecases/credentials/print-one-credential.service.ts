import { EventEmitter, Injectable } from "@angular/core";
import { NgxSpinnerService } from "ngx-spinner";

import { PrintOneCredentialsResource } from "src/app/resources/credentials/print-one-credentials.resource";

@Injectable()
export class PrintOneCredentialsService {

    protected isDone: EventEmitter<string | null> = new EventEmitter<string | null>();

    constructor(
        protected readonly spinner: NgxSpinnerService,
        protected readonly printOne: PrintOneCredentialsResource
    ) {}

    done(): EventEmitter<string | null> { return this.isDone }

    run(id: string): void {
        this.spinner.show();
        this.printOne.run(id).subscribe({
            next: (response) => {
               this.isDone.emit(response.body)
            }
        }).add(() => {
            this.spinner.hide();
        })
    }
}