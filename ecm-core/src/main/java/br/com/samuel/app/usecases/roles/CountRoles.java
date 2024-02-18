package br.com.samuel.app.usecases.roles;

import org.springframework.stereotype.Service;
import br.com.samuel.app.repository.RoleRepository;
import br.com.samuel.app.usecases.interfaces.ICounter;
import br.com.samuel.app.usecases.models.CountElements;

@Service
public class CountRoles extends ICounter<RoleRepository> {

    public CountElements run() {
        var totalElements = repository().count();
        var totalSelected = repository().countSelecteds();
        var countElements = new CountElements(totalElements, totalSelected);
        return countElements;
    }
}