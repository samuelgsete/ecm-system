package br.com.samuel.app.resources.interfaces;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;

public abstract class IRemoverResource<T, R> {

    @Autowired private R remover;

    protected R  remover() { return remover; }

    public abstract ResponseEntity<T> run(String id, T resource);
}