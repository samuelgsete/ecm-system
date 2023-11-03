package br.com.samuel.app.usecases.congregations;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import br.com.samuel.app.models.Congregation;
import br.com.samuel.app.repository.CongregationRepository;
import br.com.samuel.app.usecases.interfaces.IPaginater;

@Service
public class ListCongregationsPaginate extends IPaginater<Congregation, CongregationRepository> {

    public Page<Congregation> run(String search, String ordination, Pageable pageable) {
        switch(ordination) {
            case "by_name_desc":
                return repository().listPaginateByNameDesc(search, pageable);
            case "latest_created":
                return repository().listPaginateLatestCreated(search, pageable);
             case "older_created":
                return repository().listPaginateOlderCreated(search, pageable);
            case "latest_updated":
                return repository().listPaginateLatestUpdated(search, pageable);
            default: repository().listPaginate(search, pageable);
        }
        return repository().listPaginate(search, pageable);
    }
}