package br.com.samuel.app.usecases.roles;

import java.io.IOException;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.com.samuel.app.models.Member;
import br.com.samuel.app.models.Role;
import br.com.samuel.app.repository.RoleRepository;
import br.com.samuel.app.usecases.interfaces.IRemover;
import br.com.samuel.app.usecases.uploads.DestroyerImage;

@Service
public class DeleteRole extends IRemover<Role, RoleRepository> {

    @Autowired
    private DestroyerImage destroyer;
    
    public Optional<Role> run(String id, Role role) {
        return repository()
            .findById(id)
            .map(roleDeleted -> {
                if(role.equals(roleDeleted)) {
                    var members = roleDeleted.getMembers();
                    for(Member member : members) {
                        var photoId = member.getPhoto().getPublicId();
                        var signatureId = member.getSignature().getPublicId();
                        try {
                            destroyer.run(signatureId);
                            destroyer.run(photoId);
                        } catch (IOException e) {
                            e.printStackTrace();
                        }
                    }
                    repository().delete(roleDeleted);
                }
                return roleDeleted;
            });
    }
}