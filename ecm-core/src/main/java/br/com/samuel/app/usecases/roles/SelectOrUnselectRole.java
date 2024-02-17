package br.com.samuel.app.usecases.roles;

import java.util.Optional;
import org.springframework.stereotype.Service;

import br.com.samuel.app.models.Role;
import br.com.samuel.app.repository.RoleRepository;
import br.com.samuel.app.usecases.interfaces.ISelectOrUnselect;

@Service
public class SelectOrUnselectRole extends ISelectOrUnselect<Role, RoleRepository> {

    public Optional<Role> run(String id, Boolean isSelected) {
        return repository()
            .findById(id)
            .map(foundRole -> {
                foundRole.setIsSelected(isSelected);
                var updatedRole = repository().save(foundRole);
                return updatedRole;
            });
    }
}
