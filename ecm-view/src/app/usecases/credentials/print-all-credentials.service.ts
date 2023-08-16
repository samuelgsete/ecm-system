import { EventEmitter, Injectable } from "@angular/core";
import { NgxSpinnerService } from "ngx-spinner";
import { PrintAllCredentialsResource } from "src/app/resources/credentials/print-all-credentials.resource";
import { PrintAll } from "../models/print-all.service";

@Injectable()
export class PrintAllCredentialsService extends PrintAll {

    constructor(
        protected readonly spinner: NgxSpinnerService,
        protected readonly print: PrintAllCredentialsResource
    ) { super() }

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