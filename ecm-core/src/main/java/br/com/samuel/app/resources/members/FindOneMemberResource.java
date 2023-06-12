package br.com.samuel.app.resources.members;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import br.com.samuel.app.models.Member;
import br.com.samuel.app.resources.models.ResourceFindOne;
import br.com.samuel.app.usecases.members.FindOneMember;

@RestController
@RequestMapping("/members")
public class FindOneMemberResource extends ResourceFindOne<Member, FindOneMember> {

    @GetMapping("/{id}")
    public ResponseEntity<Member> run(@PathVariable Integer id) {
        return findOne()
            .run(id)
            .map(foundMember -> ResponseEntity.ok(foundMember))
            .orElse(ResponseEntity.notFound().build());
    }
}