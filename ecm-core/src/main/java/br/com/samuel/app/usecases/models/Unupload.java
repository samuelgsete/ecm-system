package br.com.samuel.app.usecases.models;

import java.io.IOException;
import org.springframework.beans.factory.annotation.Autowired;

public abstract class Unupload<T> {

    @Autowired
    private T unupload;

    protected T unuploadAtCloud() {
        return unupload;
    }

    public abstract void run(String publicId) throws IOException;
}