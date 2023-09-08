package br.com.samuel.app.usecases.churches;

import org.springframework.stereotype.Service;
import br.com.samuel.app.models.Church;

@Service
public class GetChurchDetails {
    
    public Church run() {
        return new Church(
            "Moisés Gonçalves Rodrigues", 
            "https://res.cloudinary.com/dt4bynswk/image/upload/v1683896485/ecm/static/assinatura-pastor_gdhrtg.png", 
            "https://res.cloudinary.com/dt4bynswk/image/upload/v1691544760/ecm/static/purple-logo_dyoguc.png"
        );
    }
}