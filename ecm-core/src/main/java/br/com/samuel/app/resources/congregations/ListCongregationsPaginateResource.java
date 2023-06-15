package br.com.samuel.app.resources.congregations;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import br.com.samuel.app.models.Congregation;
import br.com.samuel.app.resources.models.ResourcePaginate;
import br.com.samuel.app.usecases.congregations.ListCongregationsPaginate;

@RestController
@RequestMapping("/congregations")
public class ListCongregationsPaginateResource extends ResourcePaginate<Congregation, ListCongregationsPaginate> {

    @GetMapping
    public ResponseEntity<Page<Congregation>> run(
        @RequestParam String search, 
        @RequestParam String ordination, 
        Pageable pageable
    ) {
        return ResponseEntity.ok(paginate().run(search, ordination, pageable));
    }
}