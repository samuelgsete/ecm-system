package br.com.samuel.app.config;

import javax.sql.DataSource;
import org.springframework.boot.jdbc.DataSourceBuilder;
import org.springframework.stereotype.Service;

@Service
public class DataSourceFactory {

    private DatabaseSet postgresDB = new DatabaseSet(
        "jdbc:postgresql://localhost:", "org.postgresql.Driver"
    );
    private DatabaseSet mysqlDB = new DatabaseSet(
        "jdbc:mysql://localhost:", "com.mysql.jdbc.Driver"
    );
    private DatabaseSet h2DB = new DatabaseSet(
        "jdbc:h2:file:", "org.h2.Driver"
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
            
            case H2:
                return DataSourceBuilder
                    .create()
                    .username(username)
                    .password(password)
                    .url(h2DB.getUrlBase() + port + "/" + database)
                    .driverClassName(h2DB.getDriver())
                    .build();

            case MYSQL:
                return DataSourceBuilder
                    .create()
                    .username(username)
                    .password(password)
                    .url(mysqlDB.getUrlBase() + port + "/" + database)
                    .driverClassName(mysqlDB.getDriver())
                    .build();

            default: 
                return DataSourceBuilder
                    .create()
                    .username(username)
                    .password(password)
                    .url(postgresDB.getUrlBase() + port + "/" + database)
                    .driverClassName(postgresDB.getDriver())
                    .build();
        }
    }
}