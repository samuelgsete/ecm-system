package br.com.samuel.app.usecases.members;

import java.net.URI;
import org.springframework.stereotype.Service;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;
import br.com.samuel.app.models.Member;
import br.com.samuel.app.repository.MemberRepository;
import br.com.samuel.app.usecases.interfaces.ICreater;
import br.com.samuel.app.exceptions.AlreadyCreatedException;

@Service
public class CreateMember extends ICreater<Member, MemberRepository> {

    public URI run(Member member) throws AlreadyCreatedException {
        member.generatePrimaryKey();
        var affiliation = member.getAffiliation();
        var photo = member.getPhoto();
        var signature = member.getSignature();
        affiliation.generatePrimaryKey();
        photo.generatePrimaryKey();
        signature.generatePrimaryKey();

        var cpf = member.getCpf();
        var rg = member.getRg();
        var memberExists = repository().alreadyCreated(cpf, rg);
        
        if(memberExists.isPresent()) 
            throw new AlreadyCreatedException(
                "Já existe um membro cadastrado com o RG ou CPF informado"
            );

        var role = member.getRole();
        if(role != null) role.addMember(member);
        
        var congregation = member.getCongregation();
        if(congregation != null) congregation.addMember(member);
        
        var createdMember = repository().save(member);

        return ServletUriComponentsBuilder
            .fromCurrentRequest()
            .path("/{id}")
            .buildAndExpand(createdMember.getId())
            .toUri();
    }
}