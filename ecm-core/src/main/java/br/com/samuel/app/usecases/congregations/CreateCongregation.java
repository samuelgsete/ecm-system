package br.com.samuel.app.usecases.congregations;

import java.net.URI;
import java.time.LocalDateTime;
import org.springframework.stereotype.Service;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;
import br.com.samuel.app.models.Congregation;
import br.com.samuel.app.repository.CongregationRepository;
import br.com.samuel.app.usecases.models.Create;

@Service
public class CreateCongregation extends Create<Congregation, CongregationRepository> {

    public URI run(Congregation congregation) {
        congregation.setCreatedAt(LocalDateTime.now());
        congregation.setUpdatedAt(LocalDateTime.now());
        var createdCongregation = getRepository().save(congregation);
        return ServletUriComponentsBuilder
            .fromCurrentRequest()
            .path("/{id}")
            .buildAndExpand(createdCongregation.getId())
            .toUri();
    }
}