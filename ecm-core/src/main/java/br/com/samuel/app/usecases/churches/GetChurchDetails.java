package br.com.samuel.app.usecases.churches;

import org.springframework.stereotype.Service;
import br.com.samuel.app.models.Church;

@Service
public class GetChurchDetails {
    
    public Church run() {
        /*return new Church(
            "Cleiton Alves Filho", 
            "https://res.cloudinary.com/dt4bynswk/image/upload/v1697827594/se-cred/static/Pr._Cleiton__2_-removebg-preview_xmslnn.png", 
            "https://res.cloudinary.com/dt4bynswk/image/upload/v1691544760/ecm/static/purple-logo_dyoguc.png"
        );*/
        return new Church(
            "Moisés Gonçalves Rodrigues", 
            "https://res.cloudinary.com/dt4bynswk/image/upload/v1697824010/se-cred/static/assinatura-pastor_gdhrtg_rsxofm.png", 
            "https://res.cloudinary.com/dt4bynswk/image/upload/v1691544760/ecm/static/purple-logo_dyoguc.png"
        );
    }
}