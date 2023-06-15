import { KeycloakService } from "keycloak-angular";

export function initializeKeycloak(keycloak: KeycloakService) {
    return () =>
        keycloak.init({
            config: {
                url: 'http://localhost:8080/',
                realm: 'ecm-system',
                clientId: 'ecm-view'
            },
            initOptions: {
                onLoad: 'login-required',
                checkLoginIframe: true
            },
            enableBearerInterceptor: true,
            bearerPrefix: 'Bearer ',
            bearerExcludedUrls: [
                '/assets',
                '/clients/public'
            ]
        }
    );
}