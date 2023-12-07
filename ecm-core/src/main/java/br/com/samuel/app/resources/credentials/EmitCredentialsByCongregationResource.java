package br.com.samuel.app.resources.credentials;

import java.time.LocalDateTime;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;

import br.com.samuel.app.resources.interfaces.IPrintResource;
import br.com.samuel.app.usecases.congregations.ListMembersByCongregation;

@Controller
@RequestMapping("/credentials")
public class EmitCredentialsByCongregationResource extends IPrintResource {

    @Autowired
    private ListMembersByCongregation listByCongregation;

    @GetMapping("congregation/{congregation}")
    public String run(Model model, @PathVariable String congregation) {
        var mainTheme = mainTheme().run().get();
        var template = mainTheme.getTemplate();
        var members = listByCongregation.run(congregation);
       
        model.addAttribute("members", members);
        model.addAttribute("dateOfIssue", LocalDateTime.now());
        model.addAttribute("dateFormatter", getDateFormatter());
        model.addAttribute("cpfFormatter", getCpfFormatter());
        model.addAttribute("maritalStatusFormatter", getMaritalStatusFormatter());
        model.addAttribute("shepherd", shepherd());

        return template;
    }
}