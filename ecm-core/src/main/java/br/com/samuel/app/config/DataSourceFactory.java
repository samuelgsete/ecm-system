package br.com.samuel.app.config;

import javax.sql.DataSource;
import org.springframework.boot.jdbc.DataSourceBuilder;
import org.springframework.stereotype.Service;

@Service
public class DataSourceFactory {

    private DatabaseSet postgresDB = new DatabaseSet(
        "jdbc:postgresql://localhost:", "org.postgresql.Driver"
    );
          
    public DataSource run(
        Sgbd sgbd,
        String username,
        String password,
        String database,
        Integer port
    ) {
        switch(sgbd) {
            case POSTGRES:
                return DataSourceBuilder
                    .create()
                    .username(username)
                    .password(password)
                    .url(postgresDB.getUrlBase() + port + "/" + database)
                    .driverClassName(postgresDB.getDriver())
                    .build();

            case H2: return null;

            case MYSQL: return null;
        }
        return null;
    }
}