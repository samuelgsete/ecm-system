package br.com.samuel.app.usecases.roles;

import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.com.samuel.app.models.Role;
import br.com.samuel.app.repository.MemberRepository;
import br.com.samuel.app.repository.RoleRepository;
import br.com.samuel.app.usecases.interfaces.IRemover;

@Service
public class DeleteRole extends IRemover<Role, RoleRepository> {

    @Autowired
    private MemberRepository memberRepository;
    
    public Optional<Role> run(String id, Role role) {
        return repository()
            .findById(id)
            .map(roleDeleted -> {
                if(role.equals(roleDeleted)) {
                    var members = roleDeleted.getMembers();
                    roleDeleted.removeAllMembers();
                    memberRepository.saveAll(members);
                    repository().delete(roleDeleted);
                }
                return roleDeleted;
            });
    }
}