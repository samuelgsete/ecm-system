package br.com.samuel.app.resources.interfaces;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;

import br.com.samuel.app.exceptions.AlreadyCreatedException;

public abstract class ICreateResource<T, R> {

    @Autowired private R creater;

    protected R creater() { return creater; }

    public abstract ResponseEntity<Object> run(T resource) throws AlreadyCreatedException;
}