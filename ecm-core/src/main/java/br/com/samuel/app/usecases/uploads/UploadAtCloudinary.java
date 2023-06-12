package br.com.samuel.app.usecases.uploads;

import java.io.IOException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationContext;
import com.cloudinary.Cloudinary;

import br.com.samuel.app.config.CloudinaryConfig;
import br.com.samuel.app.models.ImageModel;

public abstract class UploadAtCloudinary {
    
    @Autowired
    private ApplicationContext context;

    protected Cloudinary getCloudinaryConfig() {
        return context.getBean(CloudinaryConfig.class).config();
    }

    public abstract ImageModel run(byte[] img, String imgName) throws IOException;
}