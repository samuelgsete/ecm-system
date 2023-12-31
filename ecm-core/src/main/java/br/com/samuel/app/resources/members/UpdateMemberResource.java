package br.com.samuel.app.resources.members;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.samuel.app.models.Member;
import br.com.samuel.app.resources.interfaces.IUpdaterResource;
import br.com.samuel.app.usecases.members.UpdateMember;
import jakarta.validation.Valid;

@RestController
@RequestMapping("/members")
public class UpdateMemberResource extends IUpdaterResource<Member, UpdateMember> {

    @PutMapping("/{id}")
    public ResponseEntity<Member> run(@PathVariable String id, @RequestBody @Valid Member createdMember) {
        return updater()
            .run(id, createdMember)
            .map(updatedMember -> ResponseEntity.ok(updatedMember))
            .orElse(ResponseEntity.notFound().build());
    }
}