package br.com.samuel.app.resources.models;

import java.io.IOException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.multipart.MultipartFile;
import br.com.samuel.app.models.ImageModel;

public abstract class ResourceUpload<T> {
    
    @Autowired
    private T upload;

    public T upload() { return upload; }

    public abstract ResponseEntity<ImageModel> run(MultipartFile img) throws IOException;
}