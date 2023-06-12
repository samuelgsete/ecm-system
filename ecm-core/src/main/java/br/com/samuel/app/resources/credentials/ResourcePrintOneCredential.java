package br.com.samuel.app.resources.credentials;

import java.time.LocalDateTime;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import br.com.samuel.app.resources.models.ResourcePrintOne;

@Controller
@RequestMapping("/credentials")
public class ResourcePrintOneCredential extends ResourcePrintOne {
    
    @GetMapping("/{id}/print")
    public String run(@PathVariable Integer id, Model model) {
        var memberExists = findOne().run(id);
        if(memberExists.isPresent()) {
            model.addAttribute("member", memberExists.get());
            model.addAttribute("dateOfIssue", LocalDateTime.now());
            model.addAttribute("dateFormatter", getDateFormatter());
            model.addAttribute("cpfFormatter", getCpfFormatter());
            model.addAttribute("maritalStatusFormatter", getMaritalStatusFormatter());
            return "fulltheme-print-one";
        }
        return "notfound";
    }
}