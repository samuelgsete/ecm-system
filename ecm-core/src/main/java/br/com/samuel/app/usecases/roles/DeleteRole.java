package br.com.samuel.app.usecases.roles;

import java.io.IOException;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.com.samuel.app.models.Member;
import br.com.samuel.app.models.Role;
import br.com.samuel.app.repository.RoleRepository;
import br.com.samuel.app.usecases.models.DeleteOne;
import br.com.samuel.app.usecases.uploads.DeletePhotoAtCloud;
import br.com.samuel.app.usecases.uploads.DeleteSignatureAtCloud;

@Service
public class DeleteRole extends DeleteOne<Role, RoleRepository> {

    @Autowired
    private DeletePhotoAtCloud deletePhoto;
    
    @Autowired
    private DeleteSignatureAtCloud deleteSignature;

    public Optional<Role> run(String id, Role role) {
        return getRepository()
            .findById(id)
            .map(roleDeleted -> {
                if(role.equals(roleDeleted)) {
                    var members = roleDeleted.getMembers();
                    for(Member member : members) {
                        var photoId = member.getPhoto().getPublicId();
                        var signatureId = member.getSignature().getPublicId();
                        try {
                            deleteSignature.run(signatureId);
                            deletePhoto.run(photoId);
                        } catch (IOException e) {
                            e.printStackTrace();
                        }
                    }
                    getRepository().delete(roleDeleted);
                }
                return roleDeleted;
            });
    }
}