import { Injectable } from "@angular/core";

@Injectable()
export class GoToPrintService {

    private urlBase: string = 'http://localhost:8090/api/v1';

    one(id: number): void {
        window.open(this.urlBase.concat(`/credentials/${id}/print`), '_blank')?.focus();
    }

    all(): void {
        window.open(this.urlBase.concat('/credentials/print/all'), '_blank')?.focus();
    }
}