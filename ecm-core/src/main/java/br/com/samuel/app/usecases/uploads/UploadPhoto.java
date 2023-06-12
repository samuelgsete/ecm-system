package br.com.samuel.app.usecases.uploads;

import java.io.IOException;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;
import br.com.samuel.app.models.ImageModel;
import br.com.samuel.app.usecases.models.Upload;

@Service
public class UploadPhoto extends Upload<SavePhotoAtCloud> {

    public ImageModel run(MultipartFile file) throws IOException {               
        return saveAtCloud().run(file.getBytes(), randonName());
    }
}