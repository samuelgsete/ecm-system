package br.com.samuel.app.resources.shepherd;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.samuel.app.models.Shepherd;
import br.com.samuel.app.usecases.shepherd.FindShepherd;

@RestController
@RequestMapping("/shepherds")
public class FindShepherdResource {
    
    @Autowired
    private FindShepherd find;

    @GetMapping
    public ResponseEntity<Shepherd> run() {
        return ResponseEntity.ok(find.run());
    }
}