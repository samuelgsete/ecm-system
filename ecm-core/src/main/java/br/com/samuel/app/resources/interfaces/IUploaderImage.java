package br.com.samuel.app.resources.interfaces;

import java.io.IOException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.multipart.MultipartFile;

import br.com.samuel.app.models.ImageModel;
import br.com.samuel.app.usecases.uploads.UploadImage;

public abstract class IUploaderImage {

    @Autowired private UploadImage uploadImage;

    public UploadImage uploader() { return uploadImage; }

    public abstract ResponseEntity<ImageModel> run(
        MultipartFile img, 
        Integer width, 
        Integer height, 
        Integer positionX1, 
        Integer positionY1,
        String path
    ) throws IOException;
}