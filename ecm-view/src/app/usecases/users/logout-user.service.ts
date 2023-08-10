import { Injectable } from "@angular/core";

@Injectable()
export class LogoutUserService {

    private urlLogout: string = 'http://localhost:8080/realms/auth-ecm/protocol/openid-connect/logout';

    run(): void {
        window.open(this.urlLogout, '_blank')?.focus();
    }
}