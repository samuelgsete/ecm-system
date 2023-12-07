package br.com.samuel.app.usecases.shepherd;

import java.util.Optional;
import org.springframework.stereotype.Service;

import br.com.samuel.app.models.Shepherd;
import br.com.samuel.app.repository.ShepherdRepository;
import br.com.samuel.app.usecases.interfaces.IUpdater;

@Service
public class UpdateShepherd extends IUpdater<Shepherd, ShepherdRepository> {

    public Optional<Shepherd> run(String id, Shepherd shepherd) {
        return repository()
            .findById(id)
            .map(unupdatedShepherd -> {
                
                unupdatedShepherd.setName(shepherd.getName());
                unupdatedShepherd.setLocation(shepherd.getLocation());
                unupdatedShepherd.setSignature(shepherd.getSignature());
                unupdatedShepherd.toUpdated();

                var updatedShepherd = repository().save(unupdatedShepherd);
                return updatedShepherd;
            });
    }
}