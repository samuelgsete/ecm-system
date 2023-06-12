package br.com.samuel.app.usecases.models;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Page;

public abstract class Paginate<T, R> {
    
    @Autowired
    private R repository;

    protected R getRepository() { return repository; }

    public abstract Page<T> run(String search, String ordination, Pageable pageable);
}