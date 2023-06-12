package br.com.samuel.app.usecases.roles;

import java.util.Optional;
import org.springframework.stereotype.Service;
import br.com.samuel.app.models.Role;
import br.com.samuel.app.repository.RoleRepository;
import br.com.samuel.app.usecases.models.FindOne;

@Service
public class FindOneRole extends FindOne<Role, RoleRepository> {

    public Optional<Role> run(Integer id) {
        return getRepository().findById(id);
    }
}