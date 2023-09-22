package br.com.samuel.app.usecases.members;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import br.com.samuel.app.repository.MemberRepository;

@Service
public class ToggleSelectionMembers {

    @Autowired
    private MemberRepository repository;

    public void run(Boolean isSelected) {
       var allMembers = repository.findAll();
       allMembers =  allMembers.stream()
            .map(member -> {
                member.setIsSelected(isSelected);
                return member;
            }).toList();
        repository.saveAll(allMembers);
    }
}