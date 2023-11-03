package br.com.samuel.app.resources.interfaces;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;

public abstract class IUpdaterResource <T, R> {
    
    @Autowired private R updater;

    protected R updater() { return updater; }

    public abstract ResponseEntity<T> run(String id, T resource);
}