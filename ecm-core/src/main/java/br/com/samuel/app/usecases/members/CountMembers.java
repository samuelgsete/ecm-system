package br.com.samuel.app.usecases.members;

import org.springframework.stereotype.Service;

import br.com.samuel.app.repository.MemberRepository;
import br.com.samuel.app.usecases.interfaces.ICounter;
import br.com.samuel.app.usecases.models.CountElements;

@Service
public class CountMembers extends ICounter<MemberRepository> {

    public CountElements run() {
        var totalElements = repository().count();
        var totalSelected = repository().countSelecteds();
        var countElements = new CountElements(totalElements, totalSelected);
        return countElements;
    }
}