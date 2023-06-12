package br.com.samuel.app.resources.roles;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import br.com.samuel.app.models.Role;
import br.com.samuel.app.resources.models.ResourceCreate;
import br.com.samuel.app.usecases.roles.CreateRole;

@RestController
@RequestMapping("/roles")
public class CreateRoleResource extends ResourceCreate<Role, CreateRole> {

    @PostMapping
    public ResponseEntity<Object> run(@RequestBody Role role) {
        return ResponseEntity.created(create().run(role)).build();
    }  
}