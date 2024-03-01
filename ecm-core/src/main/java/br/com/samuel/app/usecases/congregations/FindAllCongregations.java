package br.com.samuel.app.usecases.congregations;

import java.util.List;
import org.springframework.stereotype.Service;

import br.com.samuel.app.models.Congregation;
import br.com.samuel.app.repository.CongregationRepository;
import br.com.samuel.app.usecases.interfaces.IFinderAll;

@Service
public class FindAllCongregations extends IFinderAll<Congregation, CongregationRepository> {

    public List<Congregation> run() {
        var allCongregations = repository().findAll();
        return allCongregations;
    }
}