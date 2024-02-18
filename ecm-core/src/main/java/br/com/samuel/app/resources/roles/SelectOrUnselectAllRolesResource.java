package br.com.samuel.app.resources.roles;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import br.com.samuel.app.resources.interfaces.ISelectOrUnselectAllResource;
import br.com.samuel.app.usecases.roles.SelectOrUnselectAllRoles;

@RestController
@RequestMapping("/roles")
public class SelectOrUnselectAllRolesResource extends ISelectOrUnselectAllResource<SelectOrUnselectAllRoles> {

    @PutMapping("/toggle-selection")
    public ResponseEntity<?> run(@RequestParam Integer selected) {
        var isSelected = selected == 1 ? true : false;
        selectOrUnselectAll().run(isSelected);
        return ResponseEntity.ok().build();
    }
}