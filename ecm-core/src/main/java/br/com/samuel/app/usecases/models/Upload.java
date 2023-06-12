package br.com.samuel.app.usecases.models;

import java.io.IOException;
import java.util.UUID;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.multipart.MultipartFile;

import br.com.samuel.app.models.ImageModel;

public abstract class Upload<T> {
    
    @Autowired
    private T upload;

    public T saveAtCloud() {
        return upload;
    }

    public String randonName() {
        return UUID.randomUUID().toString();
    }

    public abstract ImageModel run(MultipartFile file) throws IOException;
}