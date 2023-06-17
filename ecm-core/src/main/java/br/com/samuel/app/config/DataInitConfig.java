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
                "bluethemespecial-print", 
                "https://res.cloudinary.com/dt4bynswk/image/upload/v1687028969/ecm/static/blue-theme-special-preview_m1aald.png",
                false
            );
            var indigoTheme = new CredentialTheme(
                "Indigo Theme Special", 
                "indigothemespecial-print",
                "https://res.cloudinary.com/dt4bynswk/image/upload/v1687028969/ecm/static/indigo-theme-special-preview_gfrggd.png",
                false
            );
            var purpleTheme = new CredentialTheme(
                "Purple Theme Special", 
                "purplethemespecial-print",
                "https://res.cloudinary.com/dt4bynswk/image/upload/v1687028969/ecm/static/purple-theme-special-preview_pxqetp.png",
                true
            );
            var greenTheme = new CredentialTheme(
                "Green Theme Special", 
                "greenthemespecial-print", 
                "https://res.cloudinary.com/dt4bynswk/image/upload/v1687028969/ecm/static/green-theme-special-preview_lgompo.png",
                false
            );
            var yellowheme = new CredentialTheme(
                "Yellow Theme Special", 
                "yellowthemespecial-print", 
                "https://res.cloudinary.com/dt4bynswk/image/upload/v1687028970/ecm/static/yellow-theme-special-preview_weab7t.png",
                false
            );
            var pinkTheme = new CredentialTheme(
                "Pink Theme Special", 
                "pinkthemespecial-print", 
                "https://res.cloudinary.com/dt4bynswk/image/upload/v1687028970/ecm/static/pink-theme-special-preview_jneuzx.png",
                false
            );
            var redTheme = new CredentialTheme(
                "Red Theme Special", 
                "redthemespecial-print", 
                "https://res.cloudinary.com/dt4bynswk/image/upload/v1687028969/ecm/static/red-theme-special-preview_ozecsi.png",
                false
            );
            var themes = new HashSet<CredentialTheme>(Arrays.asList(
                blueTheme,
                indigoTheme,
                purpleTheme,
                greenTheme,
                yellowheme,
                pinkTheme,
                redTheme
            ));
            createMany.run(themes);
        }
    }
}