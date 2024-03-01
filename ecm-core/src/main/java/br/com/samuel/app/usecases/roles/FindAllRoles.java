package br.com.samuel.app.usecases.roles;

import java.util.List;
import org.springframework.stereotype.Service;

import br.com.samuel.app.models.Role;
import br.com.samuel.app.repository.RoleRepository;
import br.com.samuel.app.usecases.interfaces.IFinderAll;

@Service
public class FindAllRoles extends IFinderAll<Role, RoleRepository> {

    public List<Role> run() {
       var allRoles = repository().findAll();
       return allRoles;
    }
}