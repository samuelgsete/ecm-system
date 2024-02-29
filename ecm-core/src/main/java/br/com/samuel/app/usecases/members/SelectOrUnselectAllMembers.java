package br.com.samuel.app.usecases.members;

import org.springframework.stereotype.Service;
import br.com.samuel.app.repository.MemberRepository;
import br.com.samuel.app.usecases.interfaces.ISelectOrUnselectAll;

@Service
public class SelectOrUnselectAllMembers extends ISelectOrUnselectAll<MemberRepository> {

    public void run(Boolean isSelected) {
       var allMembers = repository().findAll();
       var updatedMembers =  allMembers.stream()
            .map(member -> {
                member.setIsSelected(isSelected);
                return member;
            }).toList();
        repository().saveAll(updatedMembers);
    }
}