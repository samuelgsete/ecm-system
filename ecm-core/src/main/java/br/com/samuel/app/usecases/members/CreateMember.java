package br.com.samuel.app.usecases.members;

import java.net.URI;
import org.springframework.stereotype.Service;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;
import br.com.samuel.app.models.Member;
import br.com.samuel.app.repository.MemberRepository;
import br.com.samuel.app.usecases.models.Create;

@Service
public class CreateMember extends Create<Member, MemberRepository> {

    public URI run(Member member) {
        var role = member.getRole();
        var congregation = member.getCongregation();
        congregation.addMember(member);
        role.addMember(member);
        var createdMember = getRepository().save(member);

        return ServletUriComponentsBuilder
            .fromCurrentRequest()
            .path("/{id}")
            .buildAndExpand(createdMember.getId())
            .toUri();
    }
}