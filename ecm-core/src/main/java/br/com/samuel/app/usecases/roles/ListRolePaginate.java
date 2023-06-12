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
            // Lista os mais recentes
            case "latest":
                return getRepository().listLatest(search, pageable);

            default: getRepository().listPaginate(search, pageable);
        }
        return getRepository().listPaginate(search, pageable);
    }
}