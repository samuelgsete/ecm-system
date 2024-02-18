package br.com.samuel.app.usecases.roles;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.com.samuel.app.repository.MemberRepository;
import br.com.samuel.app.repository.RoleRepository;
import br.com.samuel.app.usecases.interfaces.IRemoverMany;

@Service
public class DeleteManyRoles extends IRemoverMany<RoleRepository> {

    @Autowired
    private MemberRepository memberRepository;

    public void run() {
        var roles = repository().listSelecteds();
        roles.forEach(role -> {
            var members = role.getMembers();
            role.removeAllMembers();
            // Atualiza o atributo cargo de cada membro
            memberRepository.saveAll(members);
            // Remove o cargo do banco de dados
            repository().delete(role);
        });
    }
}