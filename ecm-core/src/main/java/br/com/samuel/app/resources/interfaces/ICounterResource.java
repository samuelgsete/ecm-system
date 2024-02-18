package br.com.samuel.app.resources.interfaces;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;

import br.com.samuel.app.usecases.models.CountElements;

public abstract class ICounterResource<T> {
    
    @Autowired
    private T count;

    protected T counter() { return count; }

    public abstract ResponseEntity<CountElements> run();
}