package br.com.samuel.app.resources.credentials;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import br.com.samuel.app.usecases.credentials.MakeThemeToMain;

@RestController
@RequestMapping("/credential-themes")
public class ResourceMakeCredentialThemeToMain {
    
    @Autowired
    private MakeThemeToMain toMain;

    @PatchMapping("/{id}")
    public ResponseEntity<?> run(@PathVariable String id) {
        toMain.run(id);
        return ResponseEntity.ok().build();
    }
}