import { EventEmitter, Injectable } from "@angular/core";
import { NgxSpinnerService } from "ngx-spinner";

import { CredentialTheme } from "src/app/models/credential-theme.entity";
import { FindThemeActivatedResource } from "src/app/resources/credential-themes/find-theme-activated.resource";

@Injectable()
export class FindThemeActivatedService {

    protected isDone: EventEmitter<CredentialTheme> = new EventEmitter<CredentialTheme>();

    constructor(
        private readonly spinner: NgxSpinnerService,
        protected readonly findOne: FindThemeActivatedResource
    ) {}

    done(): EventEmitter<CredentialTheme> {
        return this.isDone;
    }

    run(): void {
        this.findOne.run().subscribe({
            next: (response) => {
                this.isDone.emit(response);
            },
            error: (eventErr) => {
                console.log(eventErr);
            }
        }).add(() => {
            this.spinner.hide();
        });
    }
}