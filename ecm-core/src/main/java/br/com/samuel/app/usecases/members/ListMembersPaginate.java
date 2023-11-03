package br.com.samuel.app.usecases.members;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import br.com.samuel.app.models.Member;
import br.com.samuel.app.repository.MemberRepository;
import br.com.samuel.app.usecases.interfaces.IPaginater;

@Service
public class ListMembersPaginate extends IPaginater<Member, MemberRepository> {
    
    public Page<Member> run(String search, String ordination, Pageable pageable) {
        switch(ordination) {
            case "by_name_desc":
                return repository().listPaginateByNameDesc(search, pageable);

            case "latest_created":
                return repository().listPaginateLatestCreated(search, pageable);

            case "latest_updated":
                return repository().listPaginateLatestUpdated(search, pageable);

            case "older_created":
                return repository().listPaginateOlder(search, pageable);
                                
            default: return repository().listPaginate(search, pageable);
        }
    }
}