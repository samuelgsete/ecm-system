package br.com.samuel.app.usecases.fields;

import java.net.URI;
import org.springframework.stereotype.Service;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import br.com.samuel.app.exceptions.AlreadyCreatedException;
import br.com.samuel.app.models.Field;
import br.com.samuel.app.repository.FieldRepository;
import br.com.samuel.app.usecases.interfaces.ICreater;

@Service
public class CreateField extends ICreater<Field, FieldRepository> {

    public URI run(Field field) throws AlreadyCreatedException {
        field.setId(primaryKey());
        var name = field.getName();
        var fieldExists = repository().alreadyCreated(name);
        if(fieldExists.isPresent())
            throw new AlreadyCreatedException(
                "Já existe um campo criado com o nome informado"
            );
        field.toCreated();
        var createdField = repository().save(field);
        return ServletUriComponentsBuilder
            .fromCurrentRequest()
            .path("/{id}")
            .buildAndExpand(createdField.getId())
            .toUri();
    }
    
}