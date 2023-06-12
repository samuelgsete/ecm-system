package br.com.samuel.app.resources.congregations;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import br.com.samuel.app.models.Congregation;
import br.com.samuel.app.resources.models.ResourceUpdate;
import br.com.samuel.app.usecases.congregations.UpdateCongregation;

@RestController
@RequestMapping("/congregations")
public class UpdateCongregationResource extends ResourceUpdate<Congregation, UpdateCongregation> {

    @PutMapping("/{id}")
    public ResponseEntity<Congregation> run(
        @PathVariable Integer id, 
        @RequestBody Congregation congregation
    ) 
    {
        return update()
            .run(id, congregation)
            .map(updatedCongregation -> ResponseEntity.ok(updatedCongregation))
            .orElse(ResponseEntity.notFound().build());
    }
}