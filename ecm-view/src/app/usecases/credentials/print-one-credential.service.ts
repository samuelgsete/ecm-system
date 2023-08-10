import { EventEmitter, Injectable } from "@angular/core";
import { NgxSpinnerService } from "ngx-spinner";
import { PrintOneCredentialsResource } from "src/app/resources/credentials/print-one-credentials.resource";

@Injectable()
export class PrintOneCredentialsService {

    private isDone: EventEmitter<any> = new EventEmitter<any>();

    constructor(
        protected readonly spinner: NgxSpinnerService,
        protected readonly printOne: PrintOneCredentialsResource
    ) {}

    done(): EventEmitter<any> {
        return this.isDone;
    }

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