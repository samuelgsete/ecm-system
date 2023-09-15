package br.com.samuel.app.usecases.uploads;

import java.io.IOException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationContext;
import com.cloudinary.utils.ObjectUtils;
import br.com.samuel.app.config.CloudinaryConfig;
import br.com.samuel.app.models.ImageModel;

public abstract class SaveAtCloud {

    @Autowired
    private ApplicationContext context;

    private String path;

    public SaveAtCloud(String path) {
        this.path = path;
    }
    
    public abstract ImageModel run(byte[] img, String name) throws IOException;
}