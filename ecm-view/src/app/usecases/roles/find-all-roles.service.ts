import { Injectable, inject } from "@angular/core";
import { Observable, catchError, map, of } from "rxjs";

import { FindAllRolesResource } from "src/app/resources/roles/find-all-roles.resource";
import { IFinderAll } from "../interfaces/finder-all";
import { Role } from "src/app/models/role.entity";

@Injectable()
export class FindAllRolesService extends IFinderAll<Role> {

    private roles: Role[] = [];
    findAll = inject(FindAllRolesResource);

    run(): Observable<Role[]> {
        return this.findAll.run().pipe(
            map(response => {
                this.roles = response;
                return this.roles;
            }),
            catchError(error => {
                this.toastr.error('Os cargos não puderam ser encontrados', `Hã não :(`, { 
                    progressBar: true,
                    positionClass: 'toast-bottom-center'
                });
                return of(this.roles);
            })
        )
    }
}