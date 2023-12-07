package br.com.samuel.app.usecases.shepherd;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.com.samuel.app.models.Shepherd;
import br.com.samuel.app.repository.ShepherdRepository;

@Service
public class FindShepherd {

    @Autowired
    private ShepherdRepository repository;

    public Shepherd run() {
        var result = repository.findAll();
        if(result.isEmpty()) return null;
        return result.get(0);
    }
}