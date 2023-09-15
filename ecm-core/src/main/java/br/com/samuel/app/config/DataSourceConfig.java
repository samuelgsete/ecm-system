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
    public DataSource mainDB() {
        return factory.run(
            Sgbd.POSTGRES,
            "postgres", 
            "postgres", 
            "secredavd",
            5432
        );
    }

    @Bean
    @Primary
    public DataSource testDB() {
        return factory.run(
            Sgbd.POSTGRES,
            "postgres", 
            "postgres", 
            "secredtest",
            5432
        );
    }
}