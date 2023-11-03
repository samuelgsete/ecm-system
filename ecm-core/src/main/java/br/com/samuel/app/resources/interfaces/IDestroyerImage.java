package br.com.samuel.app.resources.interfaces;

import java.io.IOException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;

import br.com.samuel.app.usecases.uploads.DestroyerImage;

public abstract class IDestroyerImage {

    @Autowired private DestroyerImage destroyerImage;

    public DestroyerImage destroyer() { return destroyerImage; }

    public abstract ResponseEntity<?> run(String publicID) throws IOException;
}
