package br.com.samuel.app.resources.congregations;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.samuel.app.usecases.congregations.DeleteCongregationsSelecteds;

@RestController
@RequestMapping("/congregations")
public class DeleteCongregationsSelectedsResource {
    
    @Autowired
    private DeleteCongregationsSelecteds deleteMany;

    @DeleteMapping("/selecteds")
    public ResponseEntity<?> run() {
        deleteMany.run();
        return ResponseEntity.ok().build();
    }
}