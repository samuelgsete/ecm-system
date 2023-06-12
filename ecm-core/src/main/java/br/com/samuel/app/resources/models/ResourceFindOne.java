package br.com.samuel.app.resources.models;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;

public abstract class ResourceFindOne<T, R> {

    @Autowired
    private R find;

    protected R findOne() { return find; }

    public abstract ResponseEntity<T> run(Integer id);
}