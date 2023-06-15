package br.com.samuel.app.resources.roles;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import br.com.samuel.app.models.Role;
import br.com.samuel.app.resources.models.ResourceFindOne;
import br.com.samuel.app.usecases.roles.FindOneRole;

@RestController
@RequestMapping("/roles")
public class FindOneRoleResource extends ResourceFindOne<Role, FindOneRole> {

    @GetMapping("/{id}")
    public ResponseEntity<Role> run(@PathVariable Integer id) {
        return findOne()
            .run(id)
            .map(foundRole -> ResponseEntity.ok(foundRole))
            .orElse(ResponseEntity.notFound().build());
    }
}