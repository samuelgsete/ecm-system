package br.com.samuel.app.resources.congregations;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import jakarta.validation.Valid;
import br.com.samuel.app.exceptions.AlreadyCreatedException;
import br.com.samuel.app.models.Congregation;
import br.com.samuel.app.resources.models.ResourceCreate;
import br.com.samuel.app.usecases.congregations.CreateCongregation;

@RestController
@RequestMapping("/congregations")
public class CreateCongregationResource extends ResourceCreate<Congregation, CreateCongregation> {

    @PostMapping
    public ResponseEntity<Object> run(@RequestBody @Valid Congregation congregation) throws AlreadyCreatedException {
        return ResponseEntity.created(create().run(congregation)).build();
    }
}