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
    
    public ImageModel run(byte[] img, String name) throws IOException {
        var cloudinary = context.getBean(CloudinaryConfig.class).config();
        var params = ObjectUtils.asMap(
            "public_id", this.path.concat(name),
            "resource_type", "image"
        );
        var imageMap = cloudinary.uploader().upload(img, params);
        var publicId = imageMap.get("public_id").toString();
        var uploadedAt = imageMap.get("created_at").toString();
        var url = imageMap.get("url").toString();
        var width = Integer.parseInt(imageMap.get("width").toString());
        var height = Integer.parseInt(imageMap.get("height").toString());
        var size = Long.parseLong(imageMap.get("bytes").toString());
        var format = imageMap.get("format").toString();
        
        ImageModel newImage = new ImageModel();
        newImage.setName(name);
        newImage.setPublicId(publicId);
        newImage.setHeight(height);
        newImage.setWidth(width);
        newImage.setSize(size);
        newImage.setUrl(url);
        newImage.setFormat(format);
        newImage.setUploadedAt(uploadedAt);

        return newImage;
    }
}