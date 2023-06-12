package br.com.samuel.app.usecases.uploads;

import java.io.IOException;
import org.springframework.stereotype.Service;
import br.com.samuel.app.usecases.models.Unupload;

@Service
public class UnuploadPhoto extends Unupload<DeletePhotoAtCloud> {

    public void run(String publicId) throws IOException {
       unuploadAtCloud().run(publicId); 
    }
}