package br.com.samuel.app.resources.interfaces;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;

public abstract class IFinderResource<T, R> {

    @Autowired private R finder;

    protected R finder() { return finder; }

    public abstract ResponseEntity<T> run(String id);
}