package br.com.samuel.app.resources.uploads;

import java.io.IOException;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import br.com.samuel.app.resources.models.ResourceUnupload;
import br.com.samuel.app.usecases.uploads.DeleteSignatureAtCloud;

@RestController
@RequestMapping("/delete")
public class DeleteSignatureResource extends ResourceUnupload<DeleteSignatureAtCloud> {

    @DeleteMapping("/signature")
    public ResponseEntity<?> run(@RequestParam String publicId) throws IOException {
        unupload().run(publicId);
        return ResponseEntity.ok().build();
    }
}