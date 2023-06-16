package br.com.samuel.app.config;

import javax.sql.DataSource;
import org.springframework.boot.jdbc.DataSourceBuilder;
import org.springframework.stereotype.Service;

@Service
public class DataSourceFactory {

    private final String urlBase = "jdbc:postgresql://localhost:";
    private final String driver = "org.postgresql.Driver";
    
    public DataSource run(
        String username,
        String password,
        String database,
        Integer port
    ) {
        return DataSourceBuilder
            .create()
            .username(username)
            .password(password)
            .url(urlBase + port + "/" + database)
            .driverClassName(driver)
            .build();
    }
}