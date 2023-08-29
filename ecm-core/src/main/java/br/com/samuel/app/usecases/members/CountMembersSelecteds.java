package br.com.samuel.app.usecases.members;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.com.samuel.app.repository.MemberRepository;

@Service
public class CountMembersSelecteds {
    
    @Autowired
    private MemberRepository repository;

    public Integer run() { return repository.countSelecteds(); }
}