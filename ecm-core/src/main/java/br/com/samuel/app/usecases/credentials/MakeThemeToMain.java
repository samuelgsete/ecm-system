package br.com.samuel.app.usecases.credentials;

import java.util.stream.Collectors;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import br.com.samuel.app.repository.CredentialThemeRepository;

@Service
public class MakeThemeToMain {

    @Autowired
    private CredentialThemeRepository repository;

    public void run(String id) {
        var themes = repository
            .findAll()
            .stream()
            .map(theme -> {
                if(theme.getIsActive()) 
                    theme.setIsActive(false);
                if(id.equals(theme.getId())) {
                    theme.setIsActive(true);
                    theme.toUpdated();
                }
                return theme;
            }).collect(Collectors.toSet());
        repository.saveAll(themes);
    }
}