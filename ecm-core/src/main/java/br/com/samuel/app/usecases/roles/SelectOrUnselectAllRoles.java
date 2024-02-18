package br.com.samuel.app.usecases.roles;

import org.springframework.stereotype.Service;

import br.com.samuel.app.repository.RoleRepository;
import br.com.samuel.app.usecases.interfaces.ISelectOrUnselectAll;

@Service
public class SelectOrUnselectAllRoles extends ISelectOrUnselectAll<RoleRepository> {

    public void run(Boolean isSelected) {
        var allRoles = repository().findAll();
        var updatedRoles = allRoles.stream()
            .map(role -> {
                role.setIsSelected(isSelected);
                return role;
            }).toList();
        repository().saveAll(updatedRoles);
    }
}
