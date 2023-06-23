package br.com.samuel.app.config;

import javax.sql.DataSource;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Primary;

@Configuration
public class DataSourceConfig {

    @Autowired
    private DataSourceFactory factory;
    
    @Bean
    @Primary
    public DataSource mainDatabase() {
        return factory.run(
            "postgres", 
            "postgres", 
            "ecmdb",
            5432
        );
    }

    @Bean
    public DataSource testDatabase() {
        return factory.run(
            "postgres", 
            "postgres", 
            "ecmtest2db",
            5432
        );
    }
}