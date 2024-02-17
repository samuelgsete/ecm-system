package br.com.samuel.app.resources.interfaces;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;

public abstract class ICountSelectedsResource<T> {
    
    @Autowired
    private T count;

    protected T count() { return count; }

    public abstract ResponseEntity<Integer> run();
}