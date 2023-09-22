package br.com.samuel.app.usecases.congregations;

import java.io.IOException;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.com.samuel.app.models.Congregation;
import br.com.samuel.app.models.Member;
import br.com.samuel.app.repository.CongregationRepository;
import br.com.samuel.app.usecases.models.DeleteOne;
import br.com.samuel.app.usecases.uploads.DeletePhotoAtCloud;
import br.com.samuel.app.usecases.uploads.DeleteSignatureAtCloud;

@Service
public class DeleteCongregation extends DeleteOne<Congregation, CongregationRepository> {

    @Autowired
    private DeletePhotoAtCloud deletePhoto;
    
    @Autowired
    private DeleteSignatureAtCloud deleteSignature;

    public Optional<Congregation> run(String id, Congregation congregation) {
        return getRepository()
            .findById(id)
            .map(congregationDeleted -> {
                if(congregation.equals(congregationDeleted)) {
                    var members = congregationDeleted.getMembers();
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
                    getRepository().delete(congregationDeleted);
                }
                return congregationDeleted;
            });
    }
}