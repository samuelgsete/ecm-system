package br.com.samuel.app.usecases.uploads;

import java.io.IOException;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;
import com.cloudinary.Transformation;
import com.cloudinary.utils.ObjectUtils;
import br.com.samuel.app.models.ImageModel;
import br.com.samuel.app.usecases.interfaces.IUploaderImage;

@Service
public class UploadImage extends IUploaderImage {

    public ImageModel run(MultipartFile file, Cropped cropped, String path) throws IOException {
        var image = file.getBytes();
        var imageName = generateRandonName();
        var params = ObjectUtils.asMap(
            "public_id", path.concat(imageName),
            "resource_type", "image"
        );
        var imageMap = cloudinaryConfig().uploader().upload(image, params);
        var publicId = imageMap.get("public_id").toString();
        var uploadedAt = imageMap.get("created_at").toString();
        var url = imageMap.get("url").toString();
        var width = Integer.parseInt(imageMap.get("width").toString());
        var height = Integer.parseInt(imageMap.get("height").toString());
        var size = Long.parseLong(imageMap.get("bytes").toString());
        var format = imageMap.get("format").toString();

        var urlTransformed = cloudinaryConfig()
            .url()
            .transformation(new Transformation()
                .effect("background_removal")
                .width(cropped.getWidth())
                .height(cropped.getHeight())
                .x(cropped.getPositionX1())
                .y(cropped.getPositionY2())
                .crop("crop")
            ).generate(publicId);
        
        ImageModel uploadedImage = new ImageModel();
        uploadedImage.setName(imageName);
        uploadedImage.setPublicId(publicId);
        uploadedImage.setHeight(height);
        uploadedImage.setWidth(width);
        uploadedImage.setSize(size);
        uploadedImage.setUrl(url);
        uploadedImage.setFormat(format);
        uploadedImage.setUploadedAt(uploadedAt);

        return uploadedImage;
    }
}