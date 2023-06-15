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
            case "by_name_desc":
                return getRepository().listPaginateByNameDesc(search, pageable);

            case "latest_created":
                return getRepository().listPaginateLatestCreated(search, pageable);

            case "latest_updated":
                return getRepository().listPaginateLatestUpdated(search, pageable);

            case "older_created":
                return getRepository().listPaginateOlder(search, pageable);
            
            case "older_age":
                return getRepository().listPaginateOlderAge(search, pageable);
            
            case "minor_age":
                return getRepository().listPaginateMinorAge(search, pageable);
            
            default: return getRepository().listPaginate(search, pageable);
        }
    }
}