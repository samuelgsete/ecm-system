package br.com.samuel.app.resources.roles;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import br.com.samuel.app.models.Role;
import br.com.samuel.app.resources.interfaces.ISelectOrUnselectResource;
import br.com.samuel.app.usecases.roles.SelectOrUnselectRole;

@RestController
@RequestMapping("/roles")
public class SelectOrUnselectRoleResource extends ISelectOrUnselectResource<Role, SelectOrUnselectRole> {

    @PatchMapping("/{id}")
    protected ResponseEntity<Role> run(@PathVariable String id, @RequestParam Integer isSelected) {
        var selected = isSelected == 1 ? true : false;
        return selectOrUnselect()
            .run(id, selected)
            .map(updatedRole -> ResponseEntity.ok(updatedRole))
            .orElse(ResponseEntity.notFound().build());
    }
}