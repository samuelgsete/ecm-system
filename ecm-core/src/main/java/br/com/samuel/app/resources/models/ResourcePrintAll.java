package br.com.samuel.app.resources.models;

import java.util.Set;
import org.springframework.beans.factory.annotation.Autowired;
import br.com.samuel.app.models.Member;
import br.com.samuel.app.repository.MemberRepository;
import br.com.samuel.app.usecases.utils.TextFormatter.CpfFormatter;
import br.com.samuel.app.usecases.utils.TextFormatter.DateFormatter;
import br.com.samuel.app.usecases.utils.TextFormatter.MaritalStatusFormatter;

public abstract class ResourcePrintAll {

    @Autowired
    private MemberRepository repository;

    @Autowired
    private DateFormatter dateFormatter;

    @Autowired
    private CpfFormatter cpfFormatter;

    @Autowired
    private MaritalStatusFormatter maritalStatusFormatter;

    public Set<Member> findAllSelecteds() {
        return repository.listAllSelecteds();
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
}