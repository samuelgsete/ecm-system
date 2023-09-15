package br.com.samuel.app.usecases.roles;

import java.net.URI;
import org.springframework.stereotype.Service;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import br.com.samuel.app.exceptions.AlreadyCreatedException;
import br.com.samuel.app.models.Role;
import br.com.samuel.app.repository.RoleRepository;
import br.com.samuel.app.usecases.models.Create;

@Service
public class CreateRole extends Create<Role, RoleRepository> {
    
    public URI run(Role role) throws AlreadyCreatedException {
        role.setId(getKey());
        var name = role.getName();
        var roleExists = getRepository().alreadyCreated(name);
        if(roleExists.isPresent())
            throw new AlreadyCreatedException(
                "Já existe um cargo criado com o nome informado"
            );
        role.toCreated();
        var createdRole = getRepository().save(role);
        return ServletUriComponentsBuilder
            .fromCurrentRequest()
            .path("/{id}")
            .buildAndExpand(createdRole.getId())
            .toUri();
    }
}