package br.com.samuel.app.usecases.congregations;

import java.util.Set;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.com.samuel.app.models.Member;
import br.com.samuel.app.repository.MemberRepository;

@Service
public class ListMembersByCongregation {
    
    @Autowired
    private MemberRepository repository;

    public Set<Member> run(String congregation) {
        return repository.listMembersByCongregation(congregation);
    }
}