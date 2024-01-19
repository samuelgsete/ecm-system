package br.com.samuel.app.usecases.interfaces;

import java.net.URI;
import org.springframework.beans.factory.annotation.Autowired;
import br.com.samuel.app.exceptions.AlreadyCreatedException;

public abstract class ICreater<T, R> {

    @Autowired
    private R repository;

    protected R repository() { return repository; }

    public abstract URI run(T resource) throws AlreadyCreatedException;
}