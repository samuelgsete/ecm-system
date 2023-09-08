package br.com.samuel.app.resources.uploads;

import java.io.IOException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;
import br.com.samuel.app.models.ImageModel;
import br.com.samuel.app.resources.models.ResourceUpload;
import br.com.samuel.app.usecases.uploads.Cropped;
import br.com.samuel.app.usecases.uploads.UploadSignature;

@RestController
@RequestMapping("/upload")
public class UploadSignatureResource extends ResourceUpload<UploadSignature> {

    @PostMapping("/signature")
    public ResponseEntity<ImageModel> run(
        @RequestParam MultipartFile img,
        @RequestParam Integer width,
        @RequestParam Integer height,
        @RequestParam Integer positionX1,
        @RequestParam Integer positionY1
    ) throws IOException {
        Cropped cropped = new Cropped(width, height, positionX1, positionY1);
        return ResponseEntity.status(HttpStatus.CREATED).body(upload().run(img, cropped));
    }
}