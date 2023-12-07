package br.com.samuel.app.resources.credentials;

import java.time.LocalDateTime;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;

import br.com.samuel.app.resources.interfaces.IPrintResource;
import br.com.samuel.app.usecases.roles.ListMembersByRole;

@Controller
@RequestMapping("/credentials")
public class EmitCredentialsByRoleResource extends IPrintResource {
    
    @Autowired
    private ListMembersByRole listByRole;

    @GetMapping("role/{role}")
    public String run(Model model, @PathVariable String role) {
        var mainTheme = mainTheme().run().get();
        var template = mainTheme.getTemplate();
        var members = listByRole.run(role);
       
        model.addAttribute("members", members);
        model.addAttribute("dateOfIssue", LocalDateTime.now());
        model.addAttribute("dateFormatter", getDateFormatter());
        model.addAttribute("cpfFormatter", getCpfFormatter());
        model.addAttribute("maritalStatusFormatter", getMaritalStatusFormatter());
        model.addAttribute("shepherd", shepherd());

        return template;
    }
}
