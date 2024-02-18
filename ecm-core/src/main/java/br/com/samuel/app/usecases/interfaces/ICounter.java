package br.com.samuel.app.usecases.interfaces;

import org.springframework.beans.factory.annotation.Autowired;

import br.com.samuel.app.usecases.models.CountElements;

public abstract class ICounter<R> {
    
    @Autowired
    private R repository;

    protected R repository() { return repository; }

    public abstract CountElements run();
}
