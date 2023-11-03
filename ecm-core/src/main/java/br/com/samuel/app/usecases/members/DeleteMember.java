package br.com.samuel.app.usecases.members;

import java.io.IOException;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.com.samuel.app.models.Member;
import br.com.samuel.app.repository.MemberRepository;
import br.com.samuel.app.usecases.interfaces.IRemover;
import br.com.samuel.app.usecases.uploads.DestroyerImage;

@Service
public class DeleteMember extends IRemover<Member, MemberRepository> {

    @Autowired
    private DestroyerImage destroyer;
    
    public Optional<Member> run(String id, Member member) {
        return repository()
            .findById(id)
            .map(foundMember -> {
                if(foundMember.equals(member)) {
                    // Deleta o membro da base de dados
                    repository().delete(member);
                    // Deleta as imagens do servidor de hospedagem de imagens
                    String photoId = foundMember.getPhoto().getPublicId();
                    String signatureId = foundMember.getSignature().getPublicId();
                    try {
                        destroyer.run(photoId);
                        destroyer.run(signatureId);
                    } catch (IOException e) {
                        e.printStackTrace();
                    }
                }             
                return foundMember;
            });
    }
}