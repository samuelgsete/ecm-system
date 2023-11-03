package br.com.samuel.app.resources.roles;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.samuel.app.models.Role;
import br.com.samuel.app.resources.interfaces.IRemoverResource;
import br.com.samuel.app.usecases.roles.DeleteRole;

@RestController
@RequestMapping("roles")
public class DeleteRoleResource extends IRemoverResource<Role, DeleteRole> {

    @DeleteMapping("/{id}")
    public ResponseEntity<Role> run(@PathVariable String id, @RequestBody Role role) {
        return remover()
            .run(id, role)
            .map(roleDeleted -> ResponseEntity.ok(roleDeleted))
            .orElse(ResponseEntity.notFound().build());
    }
}