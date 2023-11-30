package br.com.samuel.app.usecases.metrics;

import java.util.Arrays;
import java.util.LinkedList;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.com.samuel.app.repository.CongregationRepository;
import br.com.samuel.app.repository.MemberRepository;
import br.com.samuel.app.repository.RoleRepository;

@Service
public class DisplayMetrics {

    @Autowired
    private MemberRepository memberRepository;

    @Autowired
    private RoleRepository roleRepository;

    @Autowired
    private CongregationRepository congregationRepository;
    
    public LinkedList<Metric> run() {
        var countMembers = memberRepository.count();
        var countSelectedsMembers = Long.valueOf(memberRepository.countSelecteds());
        var countRoles = roleRepository.count();
        var countCongregations = congregationRepository.count();

        var metrics = new LinkedList<Metric>(
            Arrays.asList(
                new Metric("group_add", "Membros ativos", countMembers),
                new Metric("add_task", "Aguardando emissão", countSelectedsMembers),
                new Metric("collections_bookmark", "Cargos ativos", countRoles),
                new Metric("wb_shade", "Congregações ativas", countCongregations)
            )
        );
        return metrics;
    }
}