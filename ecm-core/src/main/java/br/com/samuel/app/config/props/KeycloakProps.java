package br.com.samuel.app.config.props;

import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.PropertySource;

@Configuration
@PropertySource(
    "classpath:keycloak.properties"
)
public class KeycloakProps {}