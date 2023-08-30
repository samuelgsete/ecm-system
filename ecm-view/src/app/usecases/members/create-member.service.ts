import { Injectable } from "@angular/core";
import { HttpEventType } from "@angular/common/http";
import { ToastrService } from "ngx-toastr";

import { CreateService } from "../models/create.service";
import { CreateMemberResource } from "src/app/resources/members/create-member.resource";
import { Member } from "src/app/models/member.entity";

const PERCENTEGE = 100;

@Injectable()
export class CreateMemberService extends CreateService  {

    progressDone: number = 0;

    constructor(
        private readonly toastr: ToastrService,
        private readonly create: CreateMemberResource
    ) { super() }

    getProgressDone(): string {
        return this.progressDone + '%';
    }

    run(member: Member): void {
        this.create.run(member).subscribe({
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