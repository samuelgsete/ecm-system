package br.com.samuel.app.resources.shepherd;

import jakarta.validation.Valid;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.samuel.app.exceptions.AlreadyCreatedException;
import br.com.samuel.app.models.Shepherd;
import br.com.samuel.app.resources.interfaces.ICreateResource;
import br.com.samuel.app.usecases.shepherd.SetShepherd;

@RestController
@RequestMapping("/shepherds")
public class SetShepherdRepository extends ICreateResource<Shepherd, SetShepherd> {

    @PostMapping
    public ResponseEntity<Object> run(@RequestBody @Valid Shepherd shepherd) throws AlreadyCreatedException {
        return ResponseEntity.created(creater().run(shepherd)).build();
    }
}