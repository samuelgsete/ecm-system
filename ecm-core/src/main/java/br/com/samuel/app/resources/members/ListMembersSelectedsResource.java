package br.com.samuel.app.resources.members;

import java.util.Set;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.samuel.app.models.Member;
import br.com.samuel.app.usecases.members.ListAllMembersSelecteds;

@RestController
@RequestMapping("/members")
public class ListMembersSelectedsResource {

    @Autowired
    private ListAllMembersSelecteds allSelecteds;

    @GetMapping("/selecteds")
    public ResponseEntity<Set<Member>> run() {
        return ResponseEntity.ok(allSelecteds.run());
    }    
}