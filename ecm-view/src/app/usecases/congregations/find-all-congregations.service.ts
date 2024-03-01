import { Injectable, inject } from "@angular/core";
import { Observable, catchError, map, of } from "rxjs";

import { Congregation } from "src/app/models/congregation.entity";
import { IFinderAll } from "../interfaces/finder-all";
import { FindAllCongregationsResource } from "src/app/resources/congregations/find-all-congregations.resource";

@Injectable()
export class FindAllCongregationsService extends IFinderAll<Congregation> {

    congregations: Congregation[] = [];
    findAll = inject(FindAllCongregationsResource);

   run(): Observable<Congregation[]> {
    return this.findAll.run().pipe(
        map(response => {
            this.congregations = response;
            return this.congregations;
        }),
        catchError(error => {
            this.toastr.error('As congregações não puderam ser encontradas', 'Hã não :(', { 
                progressBar: true,
                positionClass: 'toast-bottom-center'
            });
            return of(this.congregations);
        }))
    }
}