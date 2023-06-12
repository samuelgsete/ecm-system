package br.com.samuel.app.usecases.models;

import java.net.URI;
import org.springframework.beans.factory.annotation.Autowired;

public abstract class Create<T, R> {

    @Autowired
    private R repository;

    protected R getRepository() { return repository; }

    public abstract URI run(T newInstance);
}