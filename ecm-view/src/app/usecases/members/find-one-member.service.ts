import { Injectable, inject } from "@angular/core";

import { Member } from "src/app/models/member.entity";
import { FindOneMemberResource } from "src/app/resources/members/find-one-member.resource";
import { IFinder } from "../interfaces/finder";

@Injectable()
export class FindOneMemberService extends IFinder<Member> {

    private readonly findOne = inject( FindOneMemberResource);
    
    run(id: string): void {
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
            this.progress = false;
        })
    }
}