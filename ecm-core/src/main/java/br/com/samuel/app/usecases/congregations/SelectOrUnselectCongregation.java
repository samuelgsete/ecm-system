package br.com.samuel.app.usecases.congregations;

import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.com.samuel.app.models.Congregation;
import br.com.samuel.app.repository.CongregationRepository;

@Service
public class SelectOrUnselectCongregation {

    @Autowired
    private CongregationRepository repository;

    public Optional<Congregation> run(String id, Boolean selected) {
        return repository
            .findById(id)
            .map(congregation -> {
                congregation.setIsSelected(selected);
                var updatedCongregation = repository.save(congregation);
                return updatedCongregation;
            });
    }
}