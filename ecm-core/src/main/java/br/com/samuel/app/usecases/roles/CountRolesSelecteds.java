package br.com.samuel.app.usecases.roles;

import org.springframework.stereotype.Service;
import br.com.samuel.app.repository.RoleRepository;
import br.com.samuel.app.usecases.interfaces.ICountSelecteds;

@Service
public class CountRolesSelecteds extends ICountSelecteds<RoleRepository> {

    public Integer run() {
        return repository().countSelecteds();
    }
}