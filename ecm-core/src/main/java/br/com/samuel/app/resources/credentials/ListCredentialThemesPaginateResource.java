package br.com.samuel.app.resources.credentials;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import br.com.samuel.app.models.CredentialTheme;
import br.com.samuel.app.usecases.credentials.ListThemesPaginate;
import br.com.samuel.app.resources.interfaces.IPaginaterResource;

@RestController
@RequestMapping("credential-themes")
public class ListCredentialThemesPaginateResource extends IPaginaterResource<CredentialTheme, ListThemesPaginate> {

    @GetMapping
    public ResponseEntity<Page<CredentialTheme>> run(@RequestParam String search, @RequestParam String ordination, Pageable pageable) {
        return ResponseEntity.ok(paginater().run(search, ordination, pageable));
    }
}