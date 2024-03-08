package br.com.samuel.app.resources.members;

import org.springframework.ui.Model;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import br.com.samuel.app.usecases.congregations.ListMembersByCongregation;
import br.com.samuel.app.usecases.utils.TextFormatter.MaritalStatusFormatter;
import br.com.samuel.app.usecases.utils.services.DurationOfDates;

@Controller
@RequestMapping("/members")
public class DisplayMembersByCongregationResource {

    @Autowired
    ListMembersByCongregation listByCongregation;

    @Autowired
    private MaritalStatusFormatter maritalStatusFormatter;

    @Autowired
    private DurationOfDates duration;
    
    @GetMapping("/birthdays")
    public String run(Model model, @RequestParam String congregation) {
        var template = "display-members-by-congregation";
        var members = listByCongregation.run(congregation);
        model.addAttribute("members", members);
        model.addAttribute("maritalStatusFormatter", maritalStatusFormatter);
        model.addAttribute("duration", duration);

        return template;
    }
}