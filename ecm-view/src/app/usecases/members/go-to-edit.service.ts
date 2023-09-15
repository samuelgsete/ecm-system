import { Injectable } from "@angular/core";
import { Router } from "@angular/router";

@Injectable()
export class GoToEditService {

    constructor(private readonly router: Router) {}

    run(id: string): void {
        this.router.navigateByUrl(`/app/member/${id}/update`);
    }
}