package br.com.samuel.app.resources.members;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import br.com.samuel.app.models.Member;
import br.com.samuel.app.resources.models.ResourceUpdate;
import br.com.samuel.app.usecases.members.UpdateMember;

@RestController
@RequestMapping("/members")
public class UpdateMemberResource extends ResourceUpdate<Member, UpdateMember> {

    @PutMapping("/{id}")
    public ResponseEntity<Member> run(
        @PathVariable Integer id,
         @RequestBody Member createdMember
    ) 
    {
        return update()
            .run(id, createdMember)
            .map(updatedMember -> ResponseEntity.ok(updatedMember))
            .orElse(ResponseEntity.notFound().build());
    }
}