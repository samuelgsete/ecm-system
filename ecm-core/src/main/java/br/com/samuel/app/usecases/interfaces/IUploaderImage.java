package br.com.samuel.app.usecases.interfaces;

import java.io.IOException;
import java.util.UUID;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationContext;
import org.springframework.web.multipart.MultipartFile;
import com.cloudinary.Cloudinary;

import br.com.samuel.app.config.CloudinaryConfig;
import br.com.samuel.app.models.ImageModel;
import br.com.samuel.app.usecases.uploads.Cropped;

public abstract class IUploaderImage {

    @Autowired
    private ApplicationContext context;

    protected Cloudinary cloudinaryConfig() {
        return context.getBean(CloudinaryConfig.class).config();
    }

    public String generateRandonName() {
        return UUID.randomUUID().toString();
    }
    
    public abstract ImageModel run(MultipartFile file, Cropped cropped, String path) throws IOException;
}
