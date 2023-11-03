package br.com.samuel.app.usecases.members;

import java.util.Optional;
import org.springframework.stereotype.Service;

import br.com.samuel.app.models.Member;
import br.com.samuel.app.repository.MemberRepository;
import br.com.samuel.app.usecases.interfaces.IUpdater;

@Service
public class UpdateMember extends IUpdater<Member, MemberRepository> {

    public Optional<Member> run(String id, Member createdMember) {
        return repository()
            .findById(id)
            .map(unupdatedMember -> {
                unupdatedMember.setName(createdMember.getName());
                unupdatedMember.setGender(createdMember.getGender());
                unupdatedMember.setRg(createdMember.getRg());
                unupdatedMember.setCpf(createdMember.getCpf());
                unupdatedMember.setMaritalStatus(createdMember.getMaritalStatus());
                unupdatedMember.setAffiliation(createdMember.getAffiliation());
                unupdatedMember.setCongregation(createdMember.getCongregation());
                unupdatedMember.setRole(createdMember.getRole());
                unupdatedMember.setDateOfBirth(createdMember.getDateOfBirth());
                unupdatedMember.setDateOfBaptism(createdMember.getDateOfBaptism());
                unupdatedMember.setPhoto(createdMember.getPhoto());
                unupdatedMember.setSignature(createdMember.getSignature());
                unupdatedMember.setPhone(createdMember.getPhone());
                unupdatedMember.setEmail(createdMember.getEmail());
                unupdatedMember.setIsSelected(createdMember.getIsSelected());
                unupdatedMember.toUpdated();
                // Atualiza os dados no banco
                var updatedMember = repository().save(unupdatedMember);
                return updatedMember;
            });
    }
}