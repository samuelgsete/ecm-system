package br.com.samuel.app.usecases.congregations;

import java.net.URI;
import org.springframework.stereotype.Service;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;
import br.com.samuel.app.exceptions.AlreadyCreatedException;
import br.com.samuel.app.models.Congregation;
import br.com.samuel.app.repository.CongregationRepository;
import br.com.samuel.app.usecases.interfaces.ICreater;

@Service
public class CreateCongregation extends ICreater<Congregation, CongregationRepository> {

    public URI run(Congregation congregation) throws AlreadyCreatedException {
        congregation.generatePrimaryKey();
        var name = congregation.getName();
        var congregationExists = repository().alreadyCreated(name);
    
        if(congregationExists.isPresent()) 
            throw new AlreadyCreatedException(
                "Já existe uma congregação criada com o nome informado"
            );
        congregation.toCreated();
        var createdCongregation = repository().save(congregation);
        return ServletUriComponentsBuilder
            .fromCurrentRequest()
            .path("/{id}")
            .buildAndExpand(createdCongregation.getId())
            .toUri();
    }
}