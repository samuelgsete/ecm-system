package br.com.samuel.app.usecases.credentials;

import java.util.Set;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import br.com.samuel.app.models.CredentialTheme;
import br.com.samuel.app.repository.CredentialThemeRepository;

@Service
public class CreateManyThemes {

    @Autowired
    private CredentialThemeRepository repository;

    public void run(Set<CredentialTheme> themes) {
        repository.saveAll(themes);
    }
}
