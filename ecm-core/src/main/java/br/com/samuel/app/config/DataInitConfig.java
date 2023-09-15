package br.com.samuel.app.config;

import java.util.Arrays;
import java.util.HashSet;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationListener;
import org.springframework.context.event.ContextRefreshedEvent;
import org.springframework.stereotype.Component;

import br.com.samuel.app.models.CredentialTheme;
import br.com.samuel.app.usecases.credentials.CreateManyThemes;
import br.com.samuel.app.usecases.credentials.FindAllThemes;
import br.com.samuel.app.usecases.utils.services.PrimaryKeyGenerator;

@Component
public class DataInitConfig implements ApplicationListener<ContextRefreshedEvent> {

    @Autowired
    private FindAllThemes findAll;

    @Autowired
    private CreateManyThemes createMany;

    @Autowired
    private PrimaryKeyGenerator keyGenerator;

    public void onApplicationEvent(ContextRefreshedEvent arg) {
        createThemes();
    }

    public void createThemes() {
        var foundThemes = findAll.run();
        if(foundThemes.isEmpty()) {
            var blueTheme = new CredentialTheme(
                "Blue Theme Special", 
                "blue-theme-special", 
                false
            );
            blueTheme.setId(keyGenerator.run());

            var indigoTheme = new CredentialTheme(
                "Indigo Theme Special",
                "indigo-theme-special",
                false
            );
            indigoTheme.setId(keyGenerator.run());

            var purpleTheme = new CredentialTheme(
                "Purple Theme Special", 
                "purple-theme-special",
                true
            );
            purpleTheme.setId(keyGenerator.run());

            var greenTheme = new CredentialTheme(
                "Green Theme Special", 
                "green-theme-special", 
                false
            );
            greenTheme.setId(keyGenerator.run());

            var yellowTheme = new CredentialTheme(
                "Yellow Theme Special", 
                "yellow-theme-special",
                false
            );
            yellowTheme.setId(keyGenerator.run());

            var pinkTheme = new CredentialTheme(
                "Pink Theme Special", 
                "pink-theme-special", 
                false
            );
            pinkTheme.setId(keyGenerator.run());

            var redTheme = new CredentialTheme(
                "Red Theme Special", 
                "red-theme-special",
                false
            );
            redTheme.setId(keyGenerator.run());

            var themes = new HashSet<CredentialTheme>(Arrays.asList(
                blueTheme,
                indigoTheme,
                purpleTheme,
                greenTheme,
                yellowTheme,
                pinkTheme,
                redTheme
            ));
            createMany.run(themes);
        }
    }
}