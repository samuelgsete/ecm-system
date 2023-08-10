package br.com.samuel.app.resources.credentials;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.samuel.app.models.CredentialTheme;
import br.com.samuel.app.usecases.credentials.FindActivatedTheme;

@RestController
@RequestMapping("credential-themes")
public class ResourceFindActivatedTheme {
    
    @Autowired
    private FindActivatedTheme theme; 

    @GetMapping("/active")
    public ResponseEntity<CredentialTheme> run() {
        return theme
            .run()
            .map(foundTheme -> ResponseEntity.ok(foundTheme))
            .orElse(ResponseEntity.notFound().build());
    }
}