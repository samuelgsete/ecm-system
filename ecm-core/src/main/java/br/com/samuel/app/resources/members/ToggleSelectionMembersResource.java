package br.com.samuel.app.resources.members;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import br.com.samuel.app.usecases.members.ToggleSelectionMembers;

@RestController
@RequestMapping("/members")
public class ToggleSelectionMembersResource {
    
    @Autowired
    private ToggleSelectionMembers toggleSelection;

    @PatchMapping("/toggle-selection")
    public ResponseEntity<?> run(@RequestParam Integer selected) {
        var toggle = selected == 1 ? true : false;
        toggleSelection.run(toggle);
        return ResponseEntity.ok().build();
    }
}