package br.com.samuel.app.usecases.credentials;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import br.com.samuel.app.models.CredentialTheme;
import br.com.samuel.app.repository.CredentialThemeRepository;
import br.com.samuel.app.usecases.interfaces.IPaginater;

@Service
public class ListThemesPaginate extends IPaginater<CredentialTheme, CredentialThemeRepository> {

    public Page<CredentialTheme> run(String search, String ordination, Pageable pageable) {
        switch(ordination) {
            case "by_name_asc":
                return repository().listPaginateByNameAsc(search, pageable);
            case "by_name_desc":
                return repository().listPaginateByNameDesc(search, pageable);
            case "latest_updated":
                return repository().listPaginateLatestUpdated(search, pageable);
        }
        return repository().listPaginateByNameAsc(search, pageable);
    }
}