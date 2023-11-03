package br.com.samuel.app.usecases.members;

import java.util.Optional;
import org.springframework.stereotype.Service;

import br.com.samuel.app.models.Member;
import br.com.samuel.app.repository.MemberRepository;
import br.com.samuel.app.usecases.interfaces.IFinder;

@Service
public class FindMember extends IFinder<Member, MemberRepository> {

    public Optional<Member> run(String id) {
        return repository().findById(id);
    }
}