import { Injectable, inject } from "@angular/core";
import { Shepherd } from "src/app/models/shepherd.entity";
import { IFinderFirst } from "../interfaces/finder-first";
import { FindShepherdResource } from "src/app/resources/shepherd/find-shepherd.resource";

@Injectable()
export class FindShepherdService extends IFinderFirst<Shepherd> {

    private finder = inject(FindShepherdResource);

    run(): void {
        this.spinner.show();
        this.finder.run().subscribe({
            next: (response) => {
                this.complete.emit(response);
            },
            error: (eventErr) => {
                this.toastr.error(eventErr.error.message, `ERRO ${eventErr.error.code}`, { 
                    progressBar: true,
                    positionClass: 'toast-bottom-center'
                });
            }
        }).add(() => {
            this.spinner.hide();
        })
    }
}