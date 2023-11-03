import { EventEmitter, Injectable } from "@angular/core";
import { NgxSpinnerService } from "ngx-spinner";

import { PrintAllCredentialsResource } from "src/app/resources/credentials/print-all-credentials.resource";

@Injectable()
export class PrintAllCredentialsService {

    protected isDone: EventEmitter<string | null> = new EventEmitter<string | null>();

    constructor(
        protected readonly spinner: NgxSpinnerService,
        protected readonly print: PrintAllCredentialsResource
    ) {}

    done(): EventEmitter<string | null> { return this.isDone }

    run(): void {
        this.spinner.show();
        this.print.run().subscribe({
            next: (response) => {
               this.isDone.emit(response.body)
            }
        }).add(() => {
            this.spinner.hide();
        })
    }
}