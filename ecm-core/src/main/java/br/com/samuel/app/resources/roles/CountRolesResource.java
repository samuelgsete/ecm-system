package br.com.samuel.app.resources.roles;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import br.com.samuel.app.resources.interfaces.ICounterResource;
import br.com.samuel.app.usecases.models.CountElements;
import br.com.samuel.app.usecases.roles.CountRoles;

@RestController
@RequestMapping("/roles")
public class CountRolesResource extends ICounterResource<CountRoles> {

    @GetMapping("/count")
    public ResponseEntity<CountElements> run() { 
        return ResponseEntity.ok(counter().run());
    }
}
