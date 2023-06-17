package br.com.samuel.app.usecases.credentials;

import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import br.com.samuel.app.models.CredentialTheme;
import br.com.samuel.app.repository.CredentialThemeRepository;

@Service
public class FindOneThemeByIsMain {

    @Autowired
    private CredentialThemeRepository repository;

    public Optional<CredentialTheme> run() {
        return repository.findOneThemeByIsMain();
    }
}