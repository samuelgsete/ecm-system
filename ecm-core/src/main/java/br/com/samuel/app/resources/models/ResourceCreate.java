package br.com.samuel.app.resources.models;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;

public abstract class ResourceCreate<T, R> {

    @Autowired
    private R create;

    protected R create() { return create; }

    public abstract ResponseEntity<Object> run(T newObject);
}