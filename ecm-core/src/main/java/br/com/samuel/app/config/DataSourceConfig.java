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
            "ecmdb",
            5432
        );
    }

    @Bean
    public DataSource testDB() {
        return factory.run(
            Sgbd.POSTGRES,
            "postgres", 
            "postgres", 
            "ecmtest2db",
            5432
        );
    }

    @Bean
    @Primary
    public DataSource mysqlDB() {
        return factory.run(
            Sgbd.MYSQL,
            "root", 
            "root", 
            "ecmdb",
            3306
        );
    }

    @Bean
    public DataSource h2DB() {
        return factory.run(
            Sgbd.H2,
            "root", 
            "root", 
            "./h2",
            5555
        );
    }
}