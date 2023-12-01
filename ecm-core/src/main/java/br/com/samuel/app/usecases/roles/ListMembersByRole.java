package br.com.samuel.app.usecases.roles;

import java.util.Set;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.com.samuel.app.models.Member;
import br.com.samuel.app.repository.MemberRepository;

@Service
public class ListMembersByRole {

    @Autowired
    private MemberRepository repository;

    public Set<Member> run(String role) {
        return repository.listMembersByRole(role);
    }
}