package br.com.samuel.app.usecases.uploads;

import java.io.IOException;
import org.springframework.stereotype.Service;
import com.cloudinary.utils.ObjectUtils;

import br.com.samuel.app.models.ImageModel;

@Service
public class SaveSignatureAtCloud extends UploadAtCloudinary {

    private String path = "ecm/assinaturas/";

    public ImageModel run(byte[] img, String imgName) throws IOException {
        var params = ObjectUtils.asMap(
            "public_id", this.path.concat(imgName),
            "resource_type", "image"
        );
        var imageMap = getCloudinaryConfig().uploader().upload(img, params);
        var publicId = imageMap.get("public_id").toString();
        var uploadedAt = imageMap.get("created_at").toString();
        var url = imageMap.get("url").toString();
        var width = Integer.parseInt(imageMap.get("width").toString());
        var height = Integer.parseInt(imageMap.get("height").toString());
        var size = Long.parseLong(imageMap.get("bytes").toString());
        var format = imageMap.get("format").toString();
        
        ImageModel uploadedImage = new ImageModel();
        uploadedImage.setName(imgName);
        uploadedImage.setPublicId(publicId);
        uploadedImage.setHeight(height);
        uploadedImage.setWidth(width);
        uploadedImage.setSize(size);
        uploadedImage.setUrl(url);
        uploadedImage.setUrlTransformed(url);
        uploadedImage.setFormat(format);
        uploadedImage.setUploadedAt(uploadedAt);

        return uploadedImage;
    }
}