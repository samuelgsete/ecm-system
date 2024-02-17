package br.com.samuel.app.usecases.congregations;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.com.samuel.app.repository.CongregationRepository;
import br.com.samuel.app.repository.MemberRepository;

@Service
public class DeleteCongregationsSelecteds {

    @Autowired
    private CongregationRepository congregationRepository;

    @Autowired
    private MemberRepository memberRepository;

    public void run() {
        var congregations = congregationRepository.listAllSelecteds();
        congregations.forEach(congregation -> {
            var members = congregation.getMembers();
            congregation.removeAllMembers();
            // Atualiza o atributo congregação de cada membro
            memberRepository.saveAll(members);
            // Deleta a congregação do banco;
            congregationRepository.delete(congregation);
        });
    }
}