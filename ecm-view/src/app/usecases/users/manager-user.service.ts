import { Injectable } from "@angular/core";

@Injectable()
export class ManagerUserService {

    urlManagerUser: string = 'http://localhost:8080/realms/auth-ecm/account';

    run(): void {
        window.open(this.urlManagerUser, '_blank')?.focus();
    }
}