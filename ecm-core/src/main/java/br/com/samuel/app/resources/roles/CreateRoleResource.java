package br.com.samuel.app.resources.roles;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.samuel.app.exceptions.AlreadyCreatedException;
import br.com.samuel.app.models.Role;
import br.com.samuel.app.resources.interfaces.ICreateResource;
import br.com.samuel.app.usecases.roles.CreateRole;
import jakarta.validation.Valid;

@RestController
@RequestMapping("/roles")
public class CreateRoleResource extends ICreateResource<Role, CreateRole> {

    @PostMapping
    public ResponseEntity<Object> run(@RequestBody @Valid Role role) throws AlreadyCreatedException {
        return ResponseEntity.created(creater().run(role)).build();
    }  
}