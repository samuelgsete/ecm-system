import { Injectable, inject } from "@angular/core";
import { CreateCongregationResource } from "src/app/resources/congregations/create-congregation.resource";
import { Congregation } from "src/app/models/congregation.entity";
import { ICreater } from "../interfaces/creater";

@Injectable()
export class CreateCongregationService extends ICreater  {

    private creater = inject(CreateCongregationResource);

    run(data: any): void {
        this.spinner.show();
        const congregation = new Congregation({
            id: data.id,
            name: data.name,
            numberOfMembers: data.numberOfMembers,
            createdAt: data.createdAt,
            updatedAt: data.updatedAt
        });
        this.creater.run(congregation).subscribe({
            next: (response) => {
                this.toastr.success('Congregação criada com sucesso', 'Tudo ok! :)', { 
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