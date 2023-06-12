package br.com.samuel.app.resources.uploads;

import java.io.IOException;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import br.com.samuel.app.resources.models.ResourceUnupload;
import br.com.samuel.app.usecases.uploads.DeletePhotoAtCloud;

@RestController
@RequestMapping("/delete")
public class DeletePhotoResource extends ResourceUnupload<DeletePhotoAtCloud> {

    @DeleteMapping("/photo")
    public ResponseEntity<?> run(@RequestParam String publicId) throws IOException {
        unupload().run(publicId);
        return ResponseEntity.ok().build();
    }
}