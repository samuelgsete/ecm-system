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
            case "by_name_desc":
                return getRepository().listPaginateByNameDesc(search, pageable);
            case "latest_created":
                return getRepository().listPaginateLatestCreated(search, pageable);
             case "older_created":
                return getRepository().listPaginateOlderCreated(search, pageable);
            case "latest_updated":
                return getRepository().listPaginateLatestUpdated(search, pageable);
            default: getRepository().listPaginate(search, pageable);
        }
        return getRepository().listPaginate(search, pageable);
    }
}