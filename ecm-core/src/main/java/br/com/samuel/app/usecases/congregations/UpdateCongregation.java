package br.com.samuel.app.usecases.congregations;

import java.util.Optional;
import org.springframework.stereotype.Service;

import br.com.samuel.app.models.Congregation;
import br.com.samuel.app.repository.CongregationRepository;
import br.com.samuel.app.usecases.interfaces.IUpdater;

@Service
public class UpdateCongregation extends IUpdater<Congregation, CongregationRepository> {

    public Optional<Congregation> run(String id, Congregation congregation) {
        return repository()
            .findById(id)
            .map(unupdatedCongregation -> {
                unupdatedCongregation.setName(congregation.getName());
                unupdatedCongregation.toUpdated();
                var updatedCongregation  = repository().save(unupdatedCongregation);
                return updatedCongregation;
            });
    }
}