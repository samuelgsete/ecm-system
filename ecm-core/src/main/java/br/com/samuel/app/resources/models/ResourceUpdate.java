package br.com.samuel.app.resources.models;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;

public abstract class ResourceUpdate<T, R> {
    
    @Autowired private R updateUsecase;

    protected R update() { return updateUsecase; }

    public abstract ResponseEntity<T> run(Integer id, T createdObject);
}