import { Injectable, inject } from "@angular/core";
import { HttpEventType } from "@angular/common/http";

import { CreateMemberResource } from "src/app/resources/members/create-member.resource";
import { Member } from "src/app/models/member.entity";
import { ICreater } from "../interfaces/creater";

const PERCENTEGE = 100;

@Injectable()
export class CreateMemberService extends ICreater {

    private creater = inject(CreateMemberResource);
    progressDone: number = 0;

    getProgressDone(): string {
        return `${this.progressDone}%`;
    }

    run(member: Member): void {
        this.creater.run(member).subscribe({
            next: (event) => {
                if(event.type == HttpEventType.UploadProgress) {
                    this.progressDone = Math.round(PERCENTEGE * event.loaded / event.total);
                }
                else if(event.type == HttpEventType.Response) {
                    this.toastr.success('Membro criado com sucesso', 'Tudo ok! :)', { 
                        progressBar: true,
                        positionClass: 'toast-bottom-center'
                    });
                    this.complete.emit(event.body);
                }
            },
            error: (eventErr) => {
                this.toastr.error(eventErr.error.message, `ERRO ${eventErr.error.code}`, { 
                    progressBar: true,
                    positionClass: 'toast-bottom-center'
                });
            }
        })
    }
}