package br.com.samuel.app.resources.interfaces;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;

public abstract class IPaginaterResource <T, R> {

    @Autowired private R paginater;

    protected R paginater() { return paginater; }

    public abstract ResponseEntity<Page<T>> run(String search, String ordination, Pageable pageable);
}