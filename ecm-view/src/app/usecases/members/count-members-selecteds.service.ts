import { EventEmitter, Injectable } from "@angular/core";
import { ToastrService } from "ngx-toastr";
import { NgxSpinnerService } from "ngx-spinner";

import { CountMembersSelectedsResource } from "src/app/resources/members/count-members-selecteds.reousrce";

@Injectable()
export class CountMembersSelectedsService {

    private isDone: EventEmitter<number> = new EventEmitter<number>();

    constructor(
        private readonly toastr: ToastrService,
        private readonly spinner: NgxSpinnerService,
        private readonly count: CountMembersSelectedsResource
    ) {}

    done(): EventEmitter<number> {
        return this.isDone;
    }

    run(): void {
        this.count.run().subscribe({
            next: (response) => {
                this.isDone.emit(response);
            },
            error: (eventErr) => {
                this.toastr.error('Não foi possível contar os membros', 'Deu errado :(', { 
                    progressBar: true,
                    positionClass: 'toast-bottom-center'
                });
            }
        })
    }
}