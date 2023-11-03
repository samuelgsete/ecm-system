package br.com.samuel.app.resources.congregations;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.samuel.app.models.Congregation;
import br.com.samuel.app.resources.interfaces.IUpdaterResource;
import br.com.samuel.app.usecases.congregations.UpdateCongregation;
import jakarta.validation.Valid;

@RestController
@RequestMapping("/congregations")
public class UpdateCongregationResource extends IUpdaterResource<Congregation, UpdateCongregation> {

    @PutMapping("/{id}")
    public ResponseEntity<Congregation> run(@PathVariable String id, @RequestBody @Valid Congregation congregation) {
        return updater()
            .run(id, congregation)
            .map(updatedCongregation -> ResponseEntity.ok(updatedCongregation))
            .orElse(ResponseEntity.notFound().build());
    }
}