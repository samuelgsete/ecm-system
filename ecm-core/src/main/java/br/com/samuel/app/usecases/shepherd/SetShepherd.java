package br.com.samuel.app.usecases.shepherd;

import java.net.URI;
import org.springframework.stereotype.Service;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;
import br.com.samuel.app.exceptions.AlreadyCreatedException;
import br.com.samuel.app.models.Shepherd;
import br.com.samuel.app.repository.ShepherdRepository;
import br.com.samuel.app.usecases.interfaces.ICreater;

@Service
public class SetShepherd extends ICreater<Shepherd, ShepherdRepository> {

    public URI run(Shepherd shepherd) throws AlreadyCreatedException {
        shepherd.generatePrimaryKey();
        
        var signature = shepherd.getSignature();
        signature.generatePrimaryKey();
        shepherd.setSignature(signature);

        shepherd.toCreated();
        var shepherdCreated = repository().save(shepherd);
        return ServletUriComponentsBuilder
            .fromCurrentRequest()
            .path("/{id}")
            .buildAndExpand(shepherdCreated.getId())
            .toUri();
    }
}