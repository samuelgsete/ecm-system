package br.com.samuel.app.usecases.roles;

import java.util.Optional;
import org.springframework.stereotype.Service;
import br.com.samuel.app.models.Role;
import br.com.samuel.app.repository.RoleRepository;
import br.com.samuel.app.usecases.models.Update;

@Service
public class UpdateRole extends Update<Role, RoleRepository> {

    public Optional<Role> run(String id, Role role) {
        return getRepository()
            .findById(id)
            .map(unupdatedRole -> {
                unupdatedRole.setName(role.getName());
                unupdatedRole.toUpdated();
                var updatedRole = getRepository().save(unupdatedRole);
                return updatedRole;
            });
    }
}