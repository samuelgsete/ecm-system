import { Injectable } from "@angular/core";
import { ToastrService } from "ngx-toastr";
import Swal from "sweetalert2";
import { NgxSpinnerService } from "ngx-spinner";

import { DeleteOne } from "../models/delete-one.service";
import { Member } from "src/app/models/member.entity";
import { DeleteMemberResource } from "src/app/resources/members/delete-member.resource";

@Injectable()
export class DeleteMemberService extends DeleteOne<Member> {

    constructor(
        protected readonly toastr: ToastrService,
        protected readonly spinner: NgxSpinnerService,
        protected readonly deleteOne: DeleteMemberResource
    ) { super() }

    run(id: string, member: Member): void {
        Swal.fire({
            title: 'Tem certeza que deseja remover?',
            text: 'Essa operação é irreversível',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'SIM',
            cancelButtonText: 'NÃO'
        }).then((result) => {
            if(result.isConfirmed) {
                this.spinner.show();
                this.deleteOne.run(id, member).subscribe({
                    next: (response) => {
                        this.toastr.success('O Membro foi removido', 'Tudo ok!', { 
                            progressBar: true,
                            positionClass: 'toast-bottom-center'
                        })
                        this.complete.emit(response)
                    },
                    error: (eventErr) => {
                        this.toastr.error('O Membro não foi removido', 'Que pena :(', { 
                            progressBar: true,
                            positionClass: 'toast-bottom-center'
                        });
                    }
                }).add(() => this.spinner.hide())
            }
        })
    }
}