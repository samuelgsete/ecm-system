package br.com.samuel.app.usecases.members;

import java.net.URI;
import org.springframework.stereotype.Service;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import br.com.samuel.app.models.Member;
import br.com.samuel.app.repository.MemberRepository;
import br.com.samuel.app.usecases.models.Create;
import br.com.samuel.app.exceptions.AlreadyCreatedException;

@Service
public class CreateMember extends Create<Member, MemberRepository> {

    public URI run(Member member) throws AlreadyCreatedException {
        member.setId(getKey());
        var affiliation = member.getAffiliation();
        var photo = member.getPhoto();
        var signature = member.getSignature();
        affiliation.setId(getKey());
        photo.setId(getKey());
        signature.setId(getKey());

        var cpf = member.getCpf();
        var rg = member.getRg();
        var memberExists = getRepository().alreadyCreated(cpf, rg);
        
        if(memberExists.isPresent()) 
            throw new AlreadyCreatedException(
                "Já existe um membro cadastrado com o RG ou CPF informado"
            );

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