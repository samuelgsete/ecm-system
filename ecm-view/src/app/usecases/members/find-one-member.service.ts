import { Injectable } from "@angular/core";
import { ToastrService } from "ngx-toastr";
import { NgxSpinnerService } from "ngx-spinner";

import { Member } from "src/app/models/member.entity";
import { FindOneMemberResource } from "src/app/resources/members/find-one-member.resource";
import { IFinder } from "../interfaces/finder";

@Injectable()
export class FindOneMemberService extends IFinder<Member> {

    constructor(
        private readonly toastr: ToastrService,
        private readonly spinner: NgxSpinnerService,
        private readonly findOne: FindOneMemberResource
    ) { super() }
    
    run(id: string): void {
        this.spinner.show();
        this.progress = true;
        this.findOne.run(id).subscribe({
            next: (response) => {
                this.complete.emit(response);
            },
            error: (eventErr) => {
                this.toastr.error('Os dados não foram carregados', 'Deu errado :(', { 
                    progressBar: true,
                    positionClass: 'toast-bottom-center'
                });
            }
        }).add(() => {
            this.spinner.hide();
            this.progress = false;
        })
    }
}