package br.com.samuel.app.usecases.interfaces;

import java.net.URI;
import org.springframework.beans.factory.annotation.Autowired;

import br.com.samuel.app.exceptions.AlreadyCreatedException;
import br.com.samuel.app.usecases.utils.services.PrimaryKeyGenerator;

public abstract class ICreater<T, R> {

    @Autowired
    private R repository;

    @Autowired
    private PrimaryKeyGenerator keyGenerator;

    protected R repository() { return repository; }

    public abstract URI run(T resource) throws AlreadyCreatedException;

    public String primaryKey() { return keyGenerator.run(); }
}