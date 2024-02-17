package br.com.samuel.app.resources.roles;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import br.com.samuel.app.resources.interfaces.ICountSelectedsResource;
import br.com.samuel.app.usecases.roles.CountRolesSelecteds;

@RestController
@RequestMapping("/roles")
public class CountRolesSelectedsResource extends ICountSelectedsResource<CountRolesSelecteds> {

    @GetMapping("/count-selecteds")
    public ResponseEntity<Integer> run() { return ResponseEntity.ok(count().run()); }
}
