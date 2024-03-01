package br.com.samuel.app.resources.congregations;

import java.util.List;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.samuel.app.models.Congregation;
import br.com.samuel.app.resources.interfaces.IFinderAllResource;
import br.com.samuel.app.usecases.congregations.FindAllCongregations;

@RestController
@RequestMapping("/congregations")
public class FindAllCongregationsResource extends IFinderAllResource<Congregation, FindAllCongregations> {

    @GetMapping("/all")
    public ResponseEntity<List<Congregation>> run() {
        return ResponseEntity.ok(findAll().run());
    }
}