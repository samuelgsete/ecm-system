package br.com.samuel.app.usecases.interfaces;

import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;

public abstract class ISelectOrUnselect<T, R> {
    
    @Autowired private R repository;

    protected R repository() { return repository; }

    public abstract Optional<T> run(String id, Boolean isSelected);
}