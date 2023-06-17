package br.com.samuel.app.usecases.credentials;

import java.util.stream.Collectors;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import br.com.samuel.app.repository.CredentialThemeRepository;

@Service
public class MakeThemeToMain {

    @Autowired
    private CredentialThemeRepository repository;

    public void run(Integer id) {
        var themes = repository
            .findAll()
            .stream()
            .map(theme -> {
                if(theme.getIsMain()) 
                    theme.setIsMain(false);
                if(id.equals(theme.getId()))
                    theme.setIsMain(true);
                return theme;
            }).collect(Collectors.toSet());
        repository.saveAll(themes);
    }
}