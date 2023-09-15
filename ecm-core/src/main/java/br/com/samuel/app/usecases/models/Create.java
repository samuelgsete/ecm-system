package br.com.samuel.app.usecases.models;

import java.net.URI;
import org.springframework.beans.factory.annotation.Autowired;
import br.com.samuel.app.exceptions.AlreadyCreatedException;
import br.com.samuel.app.usecases.utils.services.PrimaryKeyGenerator;

public abstract class Create<T, R> {

    @Autowired
    private R repository;

    @Autowired
    private PrimaryKeyGenerator keyGenerator;

    protected R getRepository() { return repository; }

    public abstract URI run(T newInstance) throws AlreadyCreatedException;

    public String getKey() { return keyGenerator.run(); }
}