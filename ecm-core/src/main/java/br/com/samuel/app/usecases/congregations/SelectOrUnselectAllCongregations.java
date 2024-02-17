package br.com.samuel.app.usecases.congregations;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.com.samuel.app.repository.CongregationRepository;

@Service
public class SelectOrUnselectAllCongregations {

    @Autowired
    private CongregationRepository repository;
    
    public void run(Boolean isSelected) {
        var allCongregations = repository.findAll();
        allCongregations = allCongregations.stream()
            .map(congregation -> {
                congregation.setIsSelected(isSelected);
                return congregation;
            }).toList();
        repository.saveAll(allCongregations);
    }
}