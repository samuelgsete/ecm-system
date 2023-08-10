import { EventEmitter, Injectable } from "@angular/core";
import { ToastrService } from "ngx-toastr";
import { NgxSpinnerService } from "ngx-spinner";

import { Member } from "src/app/models/member.entity";
import { ListMembersSelectedsResource } from "src/app/resources/members/list-members-selecteds.resource";

@Injectable()
export class ListMembersSelectedsService {

    private isDone: EventEmitter<Member[]> = new EventEmitter<Member[]>();

    constructor(
        private readonly toastr: ToastrService,
        private readonly spinner: NgxSpinnerService,
        private readonly listSelecteds: ListMembersSelectedsResource
    ) {}

    done(): EventEmitter<Member[]> {
        return this.isDone;
    }

    run(): void {
        this.spinner.show()
        this.listSelecteds.run().subscribe({
            next: (response) => {
                this.isDone.emit(response);
            },
            error: (eventErr) => {
                this.toastr.error('Não foi possível listar os membros', 'Deu errado :(', { 
                    progressBar: true,
                    positionClass: 'toast-bottom-center'
                });
            }
        }).add(() => {
            this.spinner.hide();
        });
    }
}