package br.com.samuel.app.usecases.members;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import br.com.samuel.app.models.Member;
import br.com.samuel.app.repository.MemberRepository;
import br.com.samuel.app.usecases.models.Paginate;

@Service
public class ListMembersPaginate extends Paginate<Member, MemberRepository> {
    
    public Page<Member> run(String search, String ordination, Pageable pageable) {
        switch(ordination) {
            case "latest":
                return getRepository().listLatest(search, pageable);
            
            case "allselecteds":
                return getRepository().listSelecteds(search, pageable);

            default: return getRepository().listPaginate(search, pageable);
        }
    }
}