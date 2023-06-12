package br.com.samuel.app.usecases.uploads;

import java.io.IOException;
import org.springframework.stereotype.Service;
import com.cloudinary.utils.ObjectUtils;

@Service
public class DeleteSignatureAtCloud extends DeleteAtCloud {

    private String source = "ecm/assinaturas/";
    
    public void run(String publicId) throws IOException {
        var params = ObjectUtils.asMap(
            "public_id", this.source.concat(publicId),
            "resource_type", "image"
        );
        // remove a imagem do servidor na nuvem
        getCloudinaryConfig().uploader().destroy(publicId, params);
    } 
}