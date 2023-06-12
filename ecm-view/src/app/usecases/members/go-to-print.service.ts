import { Injectable } from "@angular/core";

@Injectable()
export class GoToPrintService {

    run(id: number): void {
        window.open(`http://localhost:8080/api/v1/credentials/${id}/print`, '_blank')?.focus();
    }
}