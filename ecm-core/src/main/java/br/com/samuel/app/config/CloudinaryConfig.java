package br.com.samuel.app.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Scope;
import com.cloudinary.Cloudinary;

@Configuration
public class CloudinaryConfig {
    
    @Bean
    @Scope("singleton")
    public Cloudinary config() {
        return new Cloudinary(System.getenv("CLOUDINARY"));
    }
}