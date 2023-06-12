package br.com.samuel.app.usecases.members;

import java.util.Optional;
import org.springframework.stereotype.Service;
import br.com.samuel.app.models.Member;
import br.com.samuel.app.repository.MemberRepository;
import br.com.samuel.app.usecases.models.FindOne;

@Service
public class FindOneMember extends FindOne<Member, MemberRepository> {

    @Override
    public Optional<Member> run(Integer id) {
        return getRepository().findById(id);
    }
}