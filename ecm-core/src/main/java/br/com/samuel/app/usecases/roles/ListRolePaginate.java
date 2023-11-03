package br.com.samuel.app.usecases.roles;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import br.com.samuel.app.models.Role;

import br.com.samuel.app.repository.RoleRepository;
import br.com.samuel.app.usecases.interfaces.IPaginater;

@Service
public class ListRolePaginate extends IPaginater<Role, RoleRepository> {

    public Page<Role> run(String search, String ordination, Pageable pageable) {
        switch(ordination) {
            case "by_name_desc":
                return repository().listPaginateByNameDesc(search, pageable);
            case "latest_created":
                return repository().listPaginateLatestCreated(search, pageable);
             case "older":
                return repository().listPaginateOlder(search, pageable);
            case "latest_updated":
                return repository().listPaginateLatestUpdated(search, pageable);
            default: repository().listPaginate(search, pageable);
        }
        return repository().listPaginate(search, pageable);
    }
}