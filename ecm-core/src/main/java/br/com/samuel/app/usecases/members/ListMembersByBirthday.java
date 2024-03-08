package br.com.samuel.app.usecases.members;

import java.util.Set;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.com.samuel.app.models.Member;
import br.com.samuel.app.repository.MemberRepository;

@Service
public class ListMembersByBirthday {

    @Autowired
    MemberRepository repository;

    public Set<Member> run(Integer month, String congregation) {
        return repository.listMembersByBirthday(month, congregation);
    }
}