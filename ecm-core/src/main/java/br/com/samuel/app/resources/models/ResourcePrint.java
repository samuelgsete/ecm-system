package br.com.samuel.app.resources.models;

import org.springframework.beans.factory.annotation.Autowired;

import br.com.samuel.app.models.Church;
import br.com.samuel.app.usecases.churches.GetChurchDetails;
import br.com.samuel.app.usecases.credentials.FindActivatedTheme;
import br.com.samuel.app.usecases.members.FindOneMember;
import br.com.samuel.app.usecases.members.ListAllMembersSelecteds;
import br.com.samuel.app.usecases.utils.TextFormatter.CpfFormatter;
import br.com.samuel.app.usecases.utils.TextFormatter.DateFormatter;
import br.com.samuel.app.usecases.utils.TextFormatter.MaritalStatusFormatter;

public abstract class ResourcePrint {

    @Autowired
    private GetChurchDetails churchDetails;
    
    @Autowired
    private FindOneMember findOne;

    @Autowired
    private ListAllMembersSelecteds listAllSelecteds;

    @Autowired
    private FindActivatedTheme findMainTheme;

    @Autowired
    private DateFormatter dateFormatter;

    @Autowired
    private CpfFormatter cpfFormatter;

    @Autowired
    private MaritalStatusFormatter maritalStatusFormatter;

    public FindOneMember findOne() {
        return this.findOne;
    }

    public ListAllMembersSelecteds listAllSelecteds() {
        return listAllSelecteds;
    }

    public FindActivatedTheme mainTheme() {
        return findMainTheme;
    }

    public DateFormatter getDateFormatter() {
        return dateFormatter;
    }

    public CpfFormatter getCpfFormatter() {
        return cpfFormatter;
    }

    public MaritalStatusFormatter getMaritalStatusFormatter() {
        return maritalStatusFormatter;
    }

    public Church getChurch() { return churchDetails.run(); }
}