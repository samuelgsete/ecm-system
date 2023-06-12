import { Injectable } from "@angular/core";
import { ToastrService } from "ngx-toastr";
import { NgxSpinnerService } from "ngx-spinner";

import { findOneService } from "../models/find-one.service";
import { Member } from "src/app/models/member.entity";
import { FindOneMemberResource } from "src/app/resources/members/find-one-member.resource";

@Injectable()
export class FindOneMemberService extends findOneService<Member> {

    public constructor(
        private readonly toastr: ToastrService,
        private readonly spinner: NgxSpinnerService,
        private readonly findOne: FindOneMemberResource
    ) { super() }
    
    public override run(id: number): void {
        this.spinner.show();
        this.findOne.run(id).subscribe({
            next: (response) => {
                this.progress = false;
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
        })
    }
}