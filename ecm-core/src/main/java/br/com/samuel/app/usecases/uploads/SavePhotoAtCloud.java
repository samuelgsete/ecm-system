package br.com.samuel.app.usecases.uploads;

import java.io.IOException;
import org.springframework.stereotype.Service;
import com.cloudinary.Transformation;
import com.cloudinary.utils.ObjectUtils;

import br.com.samuel.app.models.ImageModel;

@Service
public class SavePhotoAtCloud extends UploadAtCloudinary {

    private String path = "ecm/fotos3x4/";

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

        var urlTransformed = getCloudinaryConfig()
            .url()
            .transformation(new Transformation()
                .aspectRatio("3:4")
                .gravity("face")
                .height(500)
                .crop("thumb")
                .zoom(0.8)
            ).generate(publicId);
        
        ImageModel uploadedImage = new ImageModel();
        uploadedImage.setName(imgName);
        uploadedImage.setPublicId(publicId);
        uploadedImage.setHeight(height);
        uploadedImage.setWidth(width);
        uploadedImage.setSize(size);
        uploadedImage.setUrl(url);
        uploadedImage.setUrlTransformed(urlTransformed);
        uploadedImage.setFormat(format);
        uploadedImage.setUploadedAt(uploadedAt);

        return uploadedImage;
    }
}