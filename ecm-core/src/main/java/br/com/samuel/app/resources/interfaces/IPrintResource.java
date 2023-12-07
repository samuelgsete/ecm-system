package br.com.samuel.app.resources.interfaces;

import org.springframework.beans.factory.annotation.Autowired;

import br.com.samuel.app.models.Shepherd;
import br.com.samuel.app.usecases.credentials.FindActivatedTheme;
import br.com.samuel.app.usecases.members.FindMember;
import br.com.samuel.app.usecases.members.ListAllMembersSelecteds;
import br.com.samuel.app.usecases.shepherd.FindShepherd;
import br.com.samuel.app.usecases.utils.TextFormatter.CpfFormatter;
import br.com.samuel.app.usecases.utils.TextFormatter.DateFormatter;
import br.com.samuel.app.usecases.utils.TextFormatter.MaritalStatusFormatter;

public abstract class IPrintResource {
    
    @Autowired
    private FindShepherd findShepherd;
    
    @Autowired
    private FindMember findOne;

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

    public FindMember findOne() {
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

    public Shepherd shepherd() { return findShepherd.run(); }
}