package br.com.samuel.app.usecases.roles;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import br.com.samuel.app.models.Role;
import br.com.samuel.app.repository.RoleRepository;
import br.com.samuel.app.usecases.models.Paginate;

@Service
public class ListRolePaginate extends Paginate<Role, RoleRepository> {

    public Page<Role> run(String search, String ordination, Pageable pageable) {
        switch(ordination) {
            case "by_name_desc":
                return getRepository().listPaginateByNameDesc(search, pageable);
            case "latest_created":
                return getRepository().listPaginateLatestCreated(search, pageable);
             case "older":
                return getRepository().listPaginateOlder(search, pageable);
            case "latest_updated":
                return getRepository().listPaginateLatestUpdated(search, pageable);
            default: getRepository().listPaginate(search, pageable);
        }
        return getRepository().listPaginate(search, pageable);
    }
}