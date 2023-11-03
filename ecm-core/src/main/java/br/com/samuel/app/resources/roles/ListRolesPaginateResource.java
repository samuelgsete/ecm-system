package br.com.samuel.app.resources.roles;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import br.com.samuel.app.models.Role;
import br.com.samuel.app.usecases.roles.ListRolePaginate;
import br.com.samuel.app.resources.interfaces.IPaginaterResource;

@RestController
@RequestMapping("/roles")
public class ListRolesPaginateResource extends IPaginaterResource<Role, ListRolePaginate> {

    @GetMapping
    public ResponseEntity<Page<Role>> run(@RequestParam String search, @RequestParam String ordination, Pageable pageable) {
        return ResponseEntity.ok(paginater().run(search, ordination, pageable));
    }
}