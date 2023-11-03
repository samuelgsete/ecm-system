package br.com.samuel.app.usecases.interfaces;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

public abstract class IPaginater<T, R> {
    
    @Autowired private R repository;

    protected R repository() { return repository; }

    public abstract Page<T> run(String search, String ordination, Pageable pageable);
}