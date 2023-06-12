package br.com.samuel.app.resources.models;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;

public abstract class ResourceDeleteOne<T, R> {

    @Autowired
    private R delete;

    protected R  delete() { return delete; }

    public abstract ResponseEntity<T> run(Integer id, T object);
}