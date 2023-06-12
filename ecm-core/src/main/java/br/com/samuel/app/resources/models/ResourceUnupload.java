package br.com.samuel.app.resources.models;

import java.io.IOException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;

public abstract class ResourceUnupload<T> {
    
    @Autowired
    private T unupload;

    public T unupload() { return unupload; }

    public abstract ResponseEntity<?> run(String nameImage) throws IOException;
}