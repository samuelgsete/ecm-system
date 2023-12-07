package br.com.samuel.app.resources.shepherd;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.samuel.app.models.Shepherd;
import br.com.samuel.app.resources.interfaces.IUpdaterResource;
import br.com.samuel.app.usecases.shepherd.UpdateShepherd;
import jakarta.validation.Valid;

@RestController
@RequestMapping("/shepherds")
public class UpdateShepherdResource extends IUpdaterResource<Shepherd, UpdateShepherd> {

    @PutMapping("/{id}")
    public ResponseEntity<Shepherd> run(@PathVariable String id, @RequestBody @Valid Shepherd shepherd) {
        return updater()
            .run(id, shepherd)
            .map(updatedShepherd -> ResponseEntity.ok(updatedShepherd))
            .orElse(ResponseEntity.notFound().build());
    }
    
}