package br.com.samuel.app.resources.interfaces;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;

public abstract class ISelectOrUnselectAllResource<T> {
    
    @Autowired
    private T selectOrUnselectAll;

    public T selectOrUnselectAll() {
        return this.selectOrUnselectAll;
    }

    public abstract ResponseEntity<?> run(Integer selected);
}