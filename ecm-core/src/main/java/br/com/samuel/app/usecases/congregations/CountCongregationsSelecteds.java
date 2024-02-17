package br.com.samuel.app.usecases.congregations;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.com.samuel.app.repository.CongregationRepository;

@Service
public class CountCongregationsSelecteds {

    @Autowired
    private CongregationRepository repository;

    public Integer run() { return repository.countSelecteds(); }
}