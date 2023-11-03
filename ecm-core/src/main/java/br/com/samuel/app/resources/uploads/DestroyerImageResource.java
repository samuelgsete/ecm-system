package br.com.samuel.app.resources.uploads;

import java.io.IOException;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import br.com.samuel.app.resources.interfaces.IDestroyerImage;

@RestController
@RequestMapping("/uploads")
public class DestroyerImageResource extends IDestroyerImage {
    
    @DeleteMapping("/cloud")
    public ResponseEntity<?> run(@RequestParam String publicId) throws IOException {
        destroyer().run(publicId);
        return ResponseEntity.ok().build();
    }
}