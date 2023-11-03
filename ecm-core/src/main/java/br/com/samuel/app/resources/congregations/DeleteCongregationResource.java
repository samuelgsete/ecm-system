package br.com.samuel.app.resources.congregations;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import br.com.samuel.app.models.Congregation;
import br.com.samuel.app.resources.interfaces.IRemoverResource;
import br.com.samuel.app.usecases.congregations.DeleteCongregation;

@RestController
@RequestMapping("/congregations")
public class DeleteCongregationResource extends IRemoverResource<Congregation, DeleteCongregation> {

    @DeleteMapping("/{id}")
    public ResponseEntity<Congregation> run(@PathVariable String id, @RequestBody Congregation congregation) {
        return remover()
            .run(id, congregation)
            .map(congregationDeleted -> ResponseEntity.ok(congregationDeleted))
            .orElse(ResponseEntity.notFound().build());
    }
}