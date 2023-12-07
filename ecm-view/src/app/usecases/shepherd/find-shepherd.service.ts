import { Injectable } from "@angular/core";
import { ToastrService } from "ngx-toastr";
import { NgxSpinnerService } from "ngx-spinner";

import { Shepherd } from "src/app/models/shepherd.entity";
import { IFinderFirst } from "../interfaces/finder-first";
import { FindShepherdResource } from "src/app/resources/shepherd/find-shepherd.resource";

@Injectable()
export class FindShepherdService extends IFinderFirst<Shepherd> {

    constructor(
        private readonly toastr: ToastrService,
        private readonly spinner: NgxSpinnerService,
        private readonly find: FindShepherdResource
    ) { super() }

    run(): void {
        this.spinner.show();
        this.find.run().subscribe({
            next: (response) => {
                this.complete.emit(response);
            },
            error: (eventErr) => {
                console.log(eventErr);
                /*this.toastr.error(eventErr.error.message, `ERRO ${eventErr.error.code}`, { 
                    progressBar: true,
                    positionClass: 'toast-bottom-center'
                });*/
            }
        }).add(() => {
            this.spinner.hide();
        })
    }
}