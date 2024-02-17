package br.com.samuel.app.usecases.interfaces;

import org.springframework.beans.factory.annotation.Autowired;

public abstract class ICountSelecteds<R> {
    
    @Autowired
    private R repository;

    protected R repository() { return repository; }

    public abstract Integer run();
}
