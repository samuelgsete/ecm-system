package br.com.samuel.app.usecases.members;

import java.io.IOException;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import br.com.samuel.app.models.Member;
import br.com.samuel.app.repository.MemberRepository;
import br.com.samuel.app.usecases.models.DeleteOne;
import br.com.samuel.app.usecases.uploads.DeletePhotoAtCloud;
import br.com.samuel.app.usecases.uploads.DeleteSignatureAtCloud;

@Service
public class DeleteMember extends DeleteOne<Member, MemberRepository> {

    @Autowired
    private DeletePhotoAtCloud deletePhoto;
    
    @Autowired
    private DeleteSignatureAtCloud deleteSignature;

    public Optional<Member> run(Integer id, Member member) {
        return getRepository()
            .findById(id)
            .map(foundMember -> {
                if(foundMember.equals(member)) {
                    getRepository().delete(member);
                    String photoId = foundMember.getPhoto().getPublicId();
                    String signatureId = foundMember.getSignature().getPublicId();
                    try {
                        deletePhoto.run(photoId);
                        deleteSignature.run(signatureId);
                    } catch (IOException e) {
                        e.printStackTrace();
                    }
                }             
                return foundMember;
            });
    }
}