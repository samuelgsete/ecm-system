package br.com.samuel.app.resources.credentials;

import java.time.LocalDateTime;
import java.util.Arrays;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;

import br.com.samuel.app.resources.interfaces.IPrintResource;

@Controller
@RequestMapping("/credentials")
public class ResourcePrintCredential extends IPrintResource {
    
    @GetMapping("/{id}/print")
    public String run(@PathVariable String id, Model model) {
        var memberExists = findOne().run(id);
        var mainTheme = mainTheme().run().get();
        var template = mainTheme.getTemplate();

        if(memberExists.isPresent()) {
            var member = memberExists.get();
            var members = Arrays.asList(member);
            model.addAttribute("members", members);
            model.addAttribute("dateOfIssue", LocalDateTime.now());
            model.addAttribute("dateFormatter", getDateFormatter());
            model.addAttribute("cpfFormatter", getCpfFormatter());
            model.addAttribute("maritalStatusFormatter", getMaritalStatusFormatter());
            model.addAttribute("shepherd", shepherd());
            return template;
        }
        return "notfound";
    }
}