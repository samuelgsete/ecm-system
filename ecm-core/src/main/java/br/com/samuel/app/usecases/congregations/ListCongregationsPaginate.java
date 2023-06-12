package br.com.samuel.app.usecases.congregations;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import br.com.samuel.app.models.Congregation;
import br.com.samuel.app.repository.CongregationRepository;
import br.com.samuel.app.usecases.models.Paginate;

@Service
public class ListCongregationsPaginate extends Paginate<Congregation, CongregationRepository> {

    public Page<Congregation> run(String search, String ordination, Pageable pageable) {
        switch(ordination) {
            case "latest":
                return getRepository().listLatest(search, pageable);
            default: return getRepository().listPaginate(search, pageable);
        }
    }
}