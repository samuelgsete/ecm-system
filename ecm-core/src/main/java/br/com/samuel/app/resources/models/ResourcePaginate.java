package br.com.samuel.app.resources.models;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;

public abstract class ResourcePaginate<T, R> {

    @Autowired
    private R listPaginate;

    protected R paginate() {
        return listPaginate;
    }

    public abstract ResponseEntity<Page<T>> run(String search, String ordination, Pageable pageable);
}