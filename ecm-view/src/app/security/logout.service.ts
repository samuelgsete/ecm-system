import { Injectable } from "@angular/core";
import { KeycloakService } from "keycloak-angular";

@Injectable()
export class LogoutService {

    constructor(
        protected readonly keycloak: KeycloakService
    ) {}

    run(): void {
        this.keycloak.logout();
    }
}