package br.com.samuel.app.usecases.congregations;

import org.springframework.stereotype.Service;

import br.com.samuel.app.repository.CongregationRepository;
import br.com.samuel.app.usecases.interfaces.ICounter;
import br.com.samuel.app.usecases.models.CountElements;

@Service
public class CountCongregations extends ICounter<CongregationRepository> {

    public CountElements run() {
        var totalElements = repository().count();
        var totalSelected = repository().countSelecteds();
        var countElements = new CountElements(totalElements, totalSelected);
        return countElements;
    }
}