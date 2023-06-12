package br.com.samuel.app.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.PropertySource;

@Configuration
@PropertySource(
    "classpath:jpa.properties"
)
public class JpaConfig {}