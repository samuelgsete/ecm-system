package br.com.samuel.app.resources.congregations;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.samuel.app.resources.interfaces.ICounterResource;
import br.com.samuel.app.usecases.congregations.CountCongregations;
import br.com.samuel.app.usecases.models.CountElements;

@RestController
@RequestMapping("/congregations")
public class CountCongregationsResource extends ICounterResource<CountCongregations> {

   
    @GetMapping("/count")
    public ResponseEntity<CountElements> run() {
        return ResponseEntity.ok(counter().run());
    }
}