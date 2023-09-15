package br.com.samuel.app.usecases.congregations;

import java.net.URI;
import org.springframework.stereotype.Service;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;
import br.com.samuel.app.exceptions.AlreadyCreatedException;
import br.com.samuel.app.models.Congregation;
import br.com.samuel.app.repository.CongregationRepository;
import br.com.samuel.app.usecases.models.Create;

@Service
public class CreateCongregation extends Create<Congregation, CongregationRepository> {

    public URI run(Congregation congregation) throws AlreadyCreatedException {
        congregation.setId(getKey());
        var name = congregation.getName();
        var congregationExists = getRepository().alreadyCreated(name);
    
        if(congregationExists.isPresent()) 
            throw new AlreadyCreatedException(
                "Já existe uma congregação criada com o nome informado"
            );
        congregation.toCreated();
        var createdCongregation = getRepository().save(congregation);
        return ServletUriComponentsBuilder
            .fromCurrentRequest()
            .path("/{id}")
            .buildAndExpand(createdCongregation.getId())
            .toUri();
    }
}