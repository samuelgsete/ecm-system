package br.com.samuel.app.resources.members;

import jakarta.validation.Valid;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.samuel.app.exceptions.AlreadyCreatedException;
import br.com.samuel.app.models.Member;
import br.com.samuel.app.resources.models.ResourceCreate;
import br.com.samuel.app.usecases.members.CreateMember;

@RestController
@RequestMapping("/members")
public class CreateMemberResource extends ResourceCreate<Member, CreateMember> {

    @PostMapping
    public ResponseEntity<Object> run(@RequestBody @Valid Member member) throws AlreadyCreatedException {
        return ResponseEntity.created(create().run(member)).build();
    }
}