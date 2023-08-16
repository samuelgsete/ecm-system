import { Injectable } from "@angular/core";
import { NgxSpinnerService } from "ngx-spinner";
import { PrintOneCredentialsResource } from "src/app/resources/credentials/print-one-credentials.resource";
import { PrintOne } from "../models/print-one.service";

@Injectable()
export class PrintOneCredentialsService extends PrintOne {

    constructor(
        protected readonly spinner: NgxSpinnerService,
        protected readonly printOne: PrintOneCredentialsResource
    ) { super() }

    run(id: number): void {
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