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

@Component
public class DataInitConfig implements ApplicationListener<ContextRefreshedEvent> {

    @Autowired
    private FindAllThemes findAll;

    @Autowired
    private CreateManyThemes createMany;

    public void onApplicationEvent(ContextRefreshedEvent arg) {
        createThemes();
    }

    public void createThemes() {
        var foundThemes = findAll.run();
        if(foundThemes.isEmpty()) {
            var blueTheme = new CredentialTheme(
                "Blue Theme Special", 
                "blue-theme-special", 
                false,
                "",
                4,
                false
            );
            blueTheme.generatePrimaryKey();

            var indigoTheme = new CredentialTheme(
                "Indigo Theme Special",
                "indigo-theme-special",
                false,
                "",
                5,
                false
            );
            indigoTheme.generatePrimaryKey();

            var purpleTheme = new CredentialTheme(
                "Purple Theme Special", 
                "purple-theme-special",
                true,
                "",
                5,
                false
            );
            purpleTheme.generatePrimaryKey();

            var greenTheme = new CredentialTheme(
                "Green Theme Special", 
                "green-theme-special", 
                false,
                "",
                3,
                false
            );
            greenTheme.generatePrimaryKey();

            var yellowTheme = new CredentialTheme(
                "Yellow Theme Special", 
                "yellow-theme-special",
                false,
                "", 
                4,
                false
            );
            yellowTheme.generatePrimaryKey();

            var pinkTheme = new CredentialTheme(
                "Pink Theme Special", 
                "pink-theme-special", 
                false,
                "",
                2,
                false
            );
            pinkTheme.generatePrimaryKey();

            var redTheme = new CredentialTheme(
                "Red Theme Special", 
                "red-theme-special",
                false,
                "",
                3,
                false
            );
            redTheme.generatePrimaryKey();

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