import { Injectable, inject } from "@angular/core";

import { Member } from "src/app/models/member.entity";
import { ISelectOrUnselect } from "../interfaces/select-or-unselect";
import { SelectOrUnselectMemberResource } from "src/app/resources/members/select-or-unselect-member.resource";

@Injectable()
export class SelectOrUnselectMemberService extends ISelectOrUnselect<Member> {

    private selectOrUnselect = inject(SelectOrUnselectMemberResource);

    run(id: string, isSelected: boolean): void {
        this.spinner.show();
        this.selectOrUnselect.run(id, isSelected).subscribe({
            next: (response) => { this.isDone.emit(response) },
            error: (eventErr) => {
                this.toastr.error('Não foi possível selecionar o membero', 'Que pena :(', { 
                    progressBar: true,
                    positionClass: 'toast-bottom-center'
                });
            }
        }).add(() => this.spinner.hide())
    }
}