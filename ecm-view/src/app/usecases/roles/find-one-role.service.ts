import { Injectable } from "@angular/core";
import { ToastrService } from "ngx-toastr";
import { NgxSpinnerService } from "ngx-spinner";

import { findOneService } from "../models/find-one.service";
import { Role } from "src/app/models/role.entity";
import { FindOneRoleResource } from "src/app/resources/roles/find-one-role.resource";

@Injectable()
export class FindOneRoleService extends findOneService<Role> {

    public constructor(
        private readonly toastr: ToastrService,
        private readonly spinner: NgxSpinnerService,
        private readonly findOne: FindOneRoleResource
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