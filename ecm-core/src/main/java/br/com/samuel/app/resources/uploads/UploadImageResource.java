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
import br.com.samuel.app.resources.interfaces.IUploaderImage;
import br.com.samuel.app.usecases.uploads.Cropped;

@RestController
@RequestMapping("/uploads")
public class UploadImageResource extends IUploaderImage {

    @PostMapping("/cloud")
    public ResponseEntity<ImageModel> run(
        @RequestParam MultipartFile img, 
        @RequestParam Integer width, 
        @RequestParam Integer height, 
        @RequestParam Integer positionX1,
        @RequestParam Integer positionY1, 
        @RequestParam String path
    ) throws IOException {
        Cropped cropped = new Cropped(width, height, positionX1, positionY1);
        return ResponseEntity
            .status(HttpStatus.CREATED)
            .body(uploader().run(img, cropped, path));
    }
}