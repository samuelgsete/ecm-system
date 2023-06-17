package br.com.samuel.app.usecases.credentials;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import br.com.samuel.app.models.CredentialTheme;
import br.com.samuel.app.repository.CredentialThemeRepository;

@Service
public class FindAllThemes {

    @Autowired
    private CredentialThemeRepository repository;

    public List<CredentialTheme> run() {
        return repository.findAll();
    }
}