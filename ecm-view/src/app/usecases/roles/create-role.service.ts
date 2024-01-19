import { Injectable, inject } from "@angular/core";
import { Role } from "src/app/models/role.entity";
import { CreateRoleResource } from "src/app/resources/roles/create-role.resource";
import { ICreater } from "../interfaces/creater";

@Injectable()
export class CreateRoleService extends ICreater {

    private creater = inject(CreateRoleResource);

    public override run(data: any): void {
        this.spinner.show();
        const role = new Role({
            id: data.id,
            name: data.name,
            numberOfMembers: data.numberOfMembers,
            createdAt: data.createdAt,
            updatedAt: data.updatedAt
        });
        this.creater.run(role).subscribe({
            next: (response) => {
                this.toastr.success('Cargo criado com sucesso', 'Tudo ok! :)', { 
                    progressBar: true,
                    positionClass: 'toast-bottom-center'
                });
                this.complete.emit(response);
            },
            error: (eventErr) => {
                this.toastr.error(eventErr.error.message, `ERRO ${eventErr.error.code}`, { 
                    progressBar: true,
                    positionClass: 'toast-bottom-center'
                });
            }
        }).add(() => {
            this.spinner.hide();
        })
    }
}