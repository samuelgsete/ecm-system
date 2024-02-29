package br.com.samuel.app.resources.members;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import br.com.samuel.app.models.Member;
import br.com.samuel.app.resources.interfaces.ISelectOrUnselectResource;
import br.com.samuel.app.usecases.members.SelectOrUnselectMember;

@RestController
@RequestMapping("/members")
public class SelectOrUnselectMemberResource extends ISelectOrUnselectResource<Member, SelectOrUnselectMember> {

    @PatchMapping("/{id}")
    public ResponseEntity<Member> run(@PathVariable String id, @RequestParam Integer selected) {
        var isSelected = selected == 1;
        return selectOrUnselect()
            .run(id, isSelected)
            .map(updatedMember -> ResponseEntity.ok(updatedMember))
            .orElse(ResponseEntity.notFound().build());
    }
}