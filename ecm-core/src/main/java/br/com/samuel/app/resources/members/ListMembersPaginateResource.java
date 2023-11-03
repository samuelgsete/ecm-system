package br.com.samuel.app.resources.members;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import br.com.samuel.app.models.Member;
import br.com.samuel.app.resources.interfaces.IPaginaterResource;
import br.com.samuel.app.usecases.members.ListMembersPaginate;

@RestController
@RequestMapping("/members")
public class ListMembersPaginateResource extends IPaginaterResource<Member, ListMembersPaginate> {

    @GetMapping
    public ResponseEntity<Page<Member>> run(@RequestParam String search, @RequestParam String ordination, Pageable pageable) {
        return ResponseEntity.ok(paginater().run(search, ordination, pageable));
    }   
}