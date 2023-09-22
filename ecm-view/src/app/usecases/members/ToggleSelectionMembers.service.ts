import { EventEmitter, Injectable } from "@angular/core";
import { NgxSpinnerService } from "ngx-spinner";
import { ToggleSelectionMembersResource } from "src/app/resources/members/ToggleSelectionMembers.resource";

@Injectable()
export class ToggleSelectionMembersService {

    private isDone: EventEmitter<any> = new EventEmitter<any>;

    constructor(
        private readonly spinner: NgxSpinnerService,
        private readonly toggle: ToggleSelectionMembersResource
    ) {}

    done(): EventEmitter<any> { return this.isDone }

    run(isSelected: boolean): void {
        this.spinner.show()
        this.toggle.run(isSelected).subscribe({
            next: (response) => {
                this.isDone.emit(response);
            },
            error: (eventErr) => {
               console.log(eventErr)
            }
        }).add(() => {
            this.spinner.hide();
        });
    }
}