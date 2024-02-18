package br.com.samuel.app.resources.congregations;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import br.com.samuel.app.usecases.congregations.SelectOrUnselectAllCongregations;

@RestController
@RequestMapping("/congregations")
public class SelectOrUnselectAllCongregationsResource {
    
    @Autowired
    private SelectOrUnselectAllCongregations selectOrUnselectAll;

    @PutMapping("/toggle-selection")
    public ResponseEntity<?> run(@RequestParam Integer selected) {
        var isSeleted = selected == 1 ? true : false;
        selectOrUnselectAll.run(isSeleted);
        return ResponseEntity.ok().build();
    }
}