package br.com.samuel.app.usecases.congregations;

import java.io.IOException;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.com.samuel.app.models.Congregation;
import br.com.samuel.app.models.Member;
import br.com.samuel.app.repository.CongregationRepository;
import br.com.samuel.app.usecases.interfaces.IRemover;
import br.com.samuel.app.usecases.uploads.DestroyerImage;

@Service
public class DeleteCongregation extends IRemover<Congregation, CongregationRepository> {

    @Autowired
    private DestroyerImage destroyer;
    
    public Optional<Congregation> run(String id, Congregation congregation) {
        return repository()
            .findById(id)
            .map(congregationDeleted -> {
                if(congregation.equals(congregationDeleted)) {
                    var members = congregationDeleted.getMembers();
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
                    repository().delete(congregationDeleted);
                }
                return congregationDeleted;
            });
    }
}