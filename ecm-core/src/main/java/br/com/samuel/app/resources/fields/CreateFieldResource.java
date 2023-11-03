package br.com.samuel.app.resources.fields;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.samuel.app.exceptions.AlreadyCreatedException;
import br.com.samuel.app.models.Field;
import br.com.samuel.app.resources.interfaces.ICreateResource;
import br.com.samuel.app.usecases.fields.CreateField;

@RestController
@RequestMapping("/fields")
public class CreateFieldResource extends ICreateResource<Field, CreateField> {

    @PostMapping
    public ResponseEntity<Object> run(@RequestBody Field field) throws AlreadyCreatedException {
        return ResponseEntity.created(creater().run(field)).build();
    }
}