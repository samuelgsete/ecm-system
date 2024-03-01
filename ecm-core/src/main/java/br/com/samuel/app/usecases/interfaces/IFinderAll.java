package br.com.samuel.app.usecases.interfaces;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;

public abstract class IFinderAll<T, R> {
    
    @Autowired private R repository;

    protected R repository() { return repository; }

    public abstract List<T> run();
}