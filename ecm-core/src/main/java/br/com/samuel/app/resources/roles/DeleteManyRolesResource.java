package br.com.samuel.app.resources.roles;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.samuel.app.resources.interfaces.IRemoverManyResource;
import br.com.samuel.app.usecases.roles.DeleteManyRoles;

@RestController
@RequestMapping("/roles")
public class DeleteManyRolesResource extends IRemoverManyResource<DeleteManyRoles> {

    @DeleteMapping("/many")
    public ResponseEntity<?> run() {
        removerMany().run();
        return ResponseEntity.ok().build();
    }
}