import { EventEmitter, Injectable } from "@angular/core";
import { NgxSpinnerService } from "ngx-spinner";
import { ToastrService } from "ngx-toastr";

import { Member } from "src/app/models/member.entity";
import { UpdateMemberResource } from "src/app/resources/members/update-member.resource";

@Injectable()
export class OnSelectMemberService {

    private isDone: EventEmitter<any> = new EventEmitter<any>();

    constructor(
        private readonly toastr: ToastrService,
        private readonly spinner: NgxSpinnerService,
        private readonly update: UpdateMemberResource
    ) {}

    done(): EventEmitter<any> { return this.isDone; }

    run(selected: boolean, member: Member): void {
        this.spinner.show();
        member.isSelected = selected;
        this.update.run(member.id, member).subscribe({
            next: (response) => {
                this.isDone.emit(response);
            },
            error: (eventErr) => {
                this.toastr.error('Os dados não foram alterados', 'Há não :(', { 
                    progressBar: true,
                    positionClass: 'toast-bottom-center'
                });
            }
        }).add(() => {
            this.spinner.hide();
        })
    }
}