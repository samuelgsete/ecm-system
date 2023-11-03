package br.com.samuel.app.usecases.uploads;

import java.io.IOException;
import org.springframework.stereotype.Service;
import com.cloudinary.utils.ObjectUtils;

import br.com.samuel.app.usecases.interfaces.IDestroyerImage;

@Service
public class DestroyerImage extends IDestroyerImage {

    public void run(String publicId) throws IOException {
         var params = ObjectUtils.asMap(
            "public_id", publicId,
            "resource_type", "image"
        );
        // remove a imagem do servidor na nuvem
        cloudinaryConfig().uploader().destroy(publicId, params);
    }
}