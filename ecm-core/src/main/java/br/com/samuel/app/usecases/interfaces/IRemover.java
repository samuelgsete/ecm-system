package br.com.samuel.app.usecases.interfaces;

import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;

public abstract class IRemover<T, R> {

    @Autowired private R repository;

    protected R repository() { return repository; }

    public abstract Optional<T> run(String id, T resource);
}