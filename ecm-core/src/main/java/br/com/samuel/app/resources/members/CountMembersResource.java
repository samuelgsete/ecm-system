package br.com.samuel.app.resources.members;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.samuel.app.resources.interfaces.ICounterResource;
import br.com.samuel.app.usecases.members.CountMembers;
import br.com.samuel.app.usecases.models.CountElements;

@RestController
@RequestMapping("members")
public class CountMembersResource extends ICounterResource<CountMembers> {
    
    @GetMapping("/count")
    public ResponseEntity<CountElements> run() {
        return ResponseEntity.ok(counter().run());
    }
}