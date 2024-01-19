package br.com.samuel.app.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import br.com.samuel.app.models.Shepherd;

@Repository
public interface ShepherdRepository  extends JpaRepository<Shepherd, String> {}