package br.com.samuel.app.resources.members;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.samuel.app.models.Member;
import br.com.samuel.app.resources.interfaces.IFinderResource;
import br.com.samuel.app.usecases.members.FindMember;

@RestController
@RequestMapping("/members")
public class FindMemberResource extends IFinderResource<Member, FindMember> {

    @GetMapping("/{id}")
    public ResponseEntity<Member> run(@PathVariable String id) {
        return finder()
            .run(id)
            .map(foundMember -> ResponseEntity.ok(foundMember))
            .orElse(ResponseEntity.notFound().build());
    }
}