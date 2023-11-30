package br.com.samuel.app.usecases.congregations;

import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.com.samuel.app.models.Congregation;
import br.com.samuel.app.repository.CongregationRepository;
import br.com.samuel.app.repository.MemberRepository;
import br.com.samuel.app.usecases.interfaces.IRemover;

@Service
public class DeleteCongregation extends IRemover<Congregation, CongregationRepository> {

    @Autowired
    private MemberRepository memberRepository;
    
    public Optional<Congregation> run(String id, Congregation congregation) {
        return repository()
            .findById(id)
            .map(congregationDeleted -> {
                if(congregation.equals(congregationDeleted)) {
                    var members = congregationDeleted.getMembers();
                    congregationDeleted.removeAllMembers();
                    memberRepository.saveAll(members);
                    repository().delete(congregationDeleted);
                }
                return congregationDeleted;
            });
    }
}