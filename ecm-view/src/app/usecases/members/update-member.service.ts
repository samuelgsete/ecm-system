import { Injectable } from "@angular/core";
import { ToastrService } from "ngx-toastr";
import { NgxSpinnerService } from "ngx-spinner";

import { UpdateOneService } from "../models/update-one.service";
import { Member } from "src/app/models/member.entity";
import { UpdateMemberResource } from "src/app/resources/members/update-member.resource";

@Injectable()
export class UpdateMemberService extends UpdateOneService<Member> {
    
    public constructor(
        private readonly toastr: ToastrService,
        private readonly spinner: NgxSpinnerService,
        private readonly update: UpdateMemberResource
    ) { super() }

    public override run(member: Member): void {
        this.spinner.show();
        this.update.run(member.id, member).subscribe({
            next: (response) => {
                this.toastr.success('Dados editados com sucesso', 'Feito! :)', { 
                    progressBar: true,
                    positionClass: 'toast-bottom-center'
                });
                this.complete.emit(response);
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