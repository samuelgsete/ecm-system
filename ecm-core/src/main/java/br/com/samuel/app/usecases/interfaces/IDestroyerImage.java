package br.com.samuel.app.usecases.interfaces;

import java.io.IOException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationContext;
import com.cloudinary.Cloudinary;

import br.com.samuel.app.config.CloudinaryConfig;

public abstract class IDestroyerImage {

    @Autowired
    private ApplicationContext context;

    protected Cloudinary cloudinaryConfig() {
        return context.getBean(CloudinaryConfig.class).config();
    }

    public abstract void run(String publicId) throws IOException;
}