package br.com.samuel.app.resources.roles;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import br.com.samuel.app.models.Role;
import br.com.samuel.app.resources.models.ResourceUpdate;
import br.com.samuel.app.usecases.roles.UpdateRole;
import jakarta.validation.Valid;

@RestController
@RequestMapping("/roles")
public class UpdateRoleResource extends ResourceUpdate<Role, UpdateRole> {

    @PutMapping("/{id}")
    public ResponseEntity<Role> run(@PathVariable String id, @RequestBody @Valid Role role) {
        return update()
            .run(id, role)
            .map(updatedRole -> ResponseEntity.ok(updatedRole))
            .orElse(ResponseEntity.notFound().build());
    }
}