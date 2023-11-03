package br.com.samuel.app.resources.members;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import br.com.samuel.app.models.Member;
import br.com.samuel.app.resources.interfaces.IRemoverResource;
import br.com.samuel.app.usecases.members.DeleteMember;

@RestController
@RequestMapping("/members")
public class DeleteMemberResource extends IRemoverResource<Member, DeleteMember> {

    @DeleteMapping("/{id}")
    public ResponseEntity<Member> run(@PathVariable String id, @RequestBody Member member) {
        return remover()
            .run(id, member)
            .map(deletedMember -> ResponseEntity.ok(deletedMember))
            .orElse(ResponseEntity.notFound().build());
    }}