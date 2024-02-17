package br.com.samuel.app.resources.congregations;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.samuel.app.usecases.congregations.CountCongregationsSelecteds;

@RestController
@RequestMapping("/congregations")
public class CountCongregationsSelectedsResource {

    
    @Autowired
    private CountCongregationsSelecteds count;

    @GetMapping("/count/selecteds")
    public ResponseEntity<Integer> run() {
        return ResponseEntity.ok(count.run());
    }
}