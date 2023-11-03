package br.com.samuel.app.resources.credentials;

import java.time.LocalDateTime;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import br.com.samuel.app.resources.interfaces.IPrintResource;

@Controller
@RequestMapping("/credentials")
public class ResourcePrintAllCredentials extends IPrintResource {
    
    @GetMapping("/print/all")
    public String run(Model model) {
        var members = listAllSelecteds().run();
        var mainTheme = mainTheme().run().get();
        var template = mainTheme.getTemplate();
       
        model.addAttribute("members", members);
        model.addAttribute("dateOfIssue", LocalDateTime.now());
        model.addAttribute("dateFormatter", getDateFormatter());
        model.addAttribute("cpfFormatter", getCpfFormatter());
        model.addAttribute("maritalStatusFormatter", getMaritalStatusFormatter());
        model.addAttribute("church", getChurch());

        return template;
    }
}