package br.com.samuel.app.resources.congregations;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import br.com.samuel.app.models.Congregation;
import br.com.samuel.app.usecases.congregations.SelectOrUnselectCongregation;

@RestController
@RequestMapping("/congregations")
public class SelectOrUnSelectCongregationResource {

    @Autowired
    private SelectOrUnselectCongregation selectOrUnselect;
    
    @PatchMapping("/{id}")
    public ResponseEntity<Congregation> run(@PathVariable String id, @RequestParam Integer selected) {
        var isSelected = selected == 1;
        return selectOrUnselect
            .run(id, isSelected)
            .map(updatedCongregation -> ResponseEntity.ok(updatedCongregation))
            .orElse(ResponseEntity.notFound().build());
    }
}