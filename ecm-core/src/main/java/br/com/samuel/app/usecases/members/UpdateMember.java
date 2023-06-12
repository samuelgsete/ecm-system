package br.com.samuel.app.usecases.members;

import java.util.Optional;
import org.springframework.stereotype.Service;
import br.com.samuel.app.models.Member;
import br.com.samuel.app.repository.MemberRepository;
import br.com.samuel.app.usecases.models.Update;

@Service
public class UpdateMember extends Update<Member, MemberRepository> {

    public Optional<Member> run(Integer id, Member createdMember) {
        return getRepository()
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
                var updatedMember = getRepository().save(unupdatedMember);
                return updatedMember;
            });
    }
}