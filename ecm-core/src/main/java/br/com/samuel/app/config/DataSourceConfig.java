package br.com.samuel.app.config;

import javax.sql.DataSource;
import org.springframework.boot.jdbc.DataSourceBuilder;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Primary;

@Configuration
public class DataSourceConfig {
    
    @Bean
    public DataSource mainDatabase() {
        return DataSourceBuilder
            .create()
            .username("postgres")
            .password("postgres")
            .url("jdbc:postgresql://localhost:5432/ecmdb?createDatabaseIfNotExist=true")
            .driverClassName("org.postgresql.Driver")
            .build();
    }

    @Bean
    @Primary
    public DataSource testDatabase() {
        return DataSourceBuilder
            .create()
            .username("postgres")
            .password("postgres")
            .url("jdbc:postgresql://localhost:5432/ecmtestdb")
            .driverClassName("org.postgresql.Driver")
            .build();
    }
}