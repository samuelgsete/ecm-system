package br.com.samuel.app.resources.interfaces;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;

public abstract class ISelectOrUnselectResource<T, R> {

    @Autowired
    private R selectOrUnselect;

    protected R selectOrUnselect() { return selectOrUnselect; }

    public abstract ResponseEntity<T> run(String id, Integer selected);
}