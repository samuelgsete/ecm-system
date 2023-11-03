package br.com.samuel.app.usecases.roles;

import java.util.Optional;
import org.springframework.stereotype.Service;

import br.com.samuel.app.models.Role;
import br.com.samuel.app.repository.RoleRepository;
import br.com.samuel.app.usecases.interfaces.IUpdater;

@Service
public class UpdateRole extends IUpdater<Role, RoleRepository> {

    public Optional<Role> run(String id, Role role) {
        return repository()
            .findById(id)
            .map(unupdatedRole -> {
                unupdatedRole.setName(role.getName());
                unupdatedRole.toUpdated();
                var updatedRole = repository().save(unupdatedRole);
                return updatedRole;
            });
    }
}