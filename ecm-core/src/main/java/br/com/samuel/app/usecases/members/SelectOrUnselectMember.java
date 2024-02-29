package br.com.samuel.app.usecases.members;

import java.util.Optional;
import org.springframework.stereotype.Service;

import br.com.samuel.app.models.Member;
import br.com.samuel.app.repository.MemberRepository;
import br.com.samuel.app.usecases.interfaces.ISelectOrUnselect;

@Service
public class SelectOrUnselectMember extends ISelectOrUnselect<Member, MemberRepository> {

    public Optional<Member> run(String id, Boolean isSelected) {
        return repository()
            .findById(id)
            .map(foundMember -> {
                foundMember.setIsSelected(isSelected);
                var updatedMember = repository().save(foundMember);
                return updatedMember;
            });
    }
}