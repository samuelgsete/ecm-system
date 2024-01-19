import { Injectable, inject } from "@angular/core";
import { IUpdater } from "../interfaces/updater";
import { Shepherd } from "src/app/models/shepherd.entity";
import { UpdateShepherdResource } from "src/app/resources/shepherd/update-shepherd.resource";

@Injectable()
export class UpdateShepherdService extends IUpdater<Shepherd> {
    
    private updater = inject(UpdateShepherdResource);

    run(data: any): void {
        this.spinner.show();
        const shepherd = new  Shepherd({
            id: data.id,
            name: data.name,
            location: data.location,
            signature: data.signature,
            createdAt: data.createdAt,
            updatedAt: data.updatedAt
        });
        this.updater.run(shepherd.id, shepherd).subscribe({
            next: (response) => {
                this.toastr.success('Dados atualizados com sucesso', 'Tuto Ok! :)', { 
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