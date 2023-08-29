package br.com.samuel.app.resources.members;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.samuel.app.usecases.members.CountMembersSelecteds;

@RestController
@RequestMapping("members")
public class CountMembersSelectedsResource {
    
    @Autowired
    private CountMembersSelecteds count;

    @GetMapping("/count/selecteds")
    public ResponseEntity<Integer> run() {
        return ResponseEntity.ok(count.run());
    }
}