package br.com.samuel.app.resources.interfaces;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;

public abstract class IRemoverManyResource<U> {
    
    @Autowired
    private U removerMany;

    public U removerMany() {
        return removerMany;
    }

    public abstract ResponseEntity<?> run();
}