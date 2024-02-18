package br.com.samuel.app.usecases.interfaces;

import org.springframework.beans.factory.annotation.Autowired;

public abstract class ISelectOrUnselectAll<R> {
    
    @Autowired
    private R repository;

    public R repository() { return repository; }

    public abstract void run(Boolean isSelected);
}