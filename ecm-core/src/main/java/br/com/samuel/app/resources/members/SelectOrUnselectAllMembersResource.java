package br.com.samuel.app.resources.members;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import br.com.samuel.app.resources.interfaces.ISelectOrUnselectAllResource;
import br.com.samuel.app.usecases.members.SelectOrUnselectAllMembers;

@RestController
@RequestMapping("/members")
public class SelectOrUnselectAllMembersResource extends ISelectOrUnselectAllResource<SelectOrUnselectAllMembers> {
    
    @PutMapping("/toggle-selection")
    public ResponseEntity<?> run(@RequestParam Integer selected) {
        var isSelected = selected == 1 ? true : false;
        selectOrUnselectAll().run(isSelected);
        return ResponseEntity.ok().build();
    }
}