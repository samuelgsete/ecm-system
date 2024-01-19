import { Injectable, inject } from "@angular/core";
import { Member } from "src/app/models/member.entity";
import { UpdateMemberResource } from "src/app/resources/members/update-member.resource";
import { IUpdater } from "../interfaces/updater";

@Injectable()
export class UpdateMemberService extends IUpdater<Member> {
    
    private updater = inject(UpdateMemberResource);

    run(member: Member): void {
        this.spinner.show();
        this.updater.run(member.id, member).subscribe({
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