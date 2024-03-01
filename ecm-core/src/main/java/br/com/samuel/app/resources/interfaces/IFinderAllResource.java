package br.com.samuel.app.resources.interfaces;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;

public abstract class IFinderAllResource<T, R> {
    
    @Autowired private R findAll;

    public R findAll() { return findAll; }

    public abstract ResponseEntity<List<T>> run();
}