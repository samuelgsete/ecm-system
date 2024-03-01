package br.com.samuel.app.resources.roles;

import java.util.List;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.samuel.app.models.Role;
import br.com.samuel.app.resources.interfaces.IFinderAllResource;
import br.com.samuel.app.usecases.roles.FindAllRoles;

@RestController
@RequestMapping("/roles")
public class FindAllRolesResource extends IFinderAllResource<Role, FindAllRoles> {

    @GetMapping("/all")
    public ResponseEntity<List<Role>> run() {
        return ResponseEntity.ok(findAll().run());
    }
}