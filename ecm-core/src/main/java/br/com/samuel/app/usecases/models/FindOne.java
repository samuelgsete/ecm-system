package br.com.samuel.app.usecases.models;

import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;

public abstract class FindOne<T, R> {
    
    @Autowired
    private R repository;

    protected R getRepository() { return repository; }

    public abstract Optional<T> run(String id);
}