package br.com.samuel.app.usecases.roles;

import java.net.URI;
import java.time.LocalDateTime;
import org.springframework.stereotype.Service;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;
import br.com.samuel.app.models.Role;
import br.com.samuel.app.repository.RoleRepository;
import br.com.samuel.app.usecases.models.Create;

@Service
public class CreateRole extends Create<Role, RoleRepository> {
    
    public URI run(Role role) {
        role.setCreatedAt(LocalDateTime.now());
        role.setUpdatedAt(LocalDateTime.now());
        var createdRole = getRepository().save(role);
        return ServletUriComponentsBuilder
            .fromCurrentRequest()
            .path("/{id}")
            .buildAndExpand(createdRole.getId())
            .toUri();
    }
}