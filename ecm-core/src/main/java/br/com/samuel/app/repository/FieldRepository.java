package br.com.samuel.app.repository;

import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import br.com.samuel.app.models.Field;

@Repository
public interface FieldRepository extends JpaRepository<Field, String> {

    @Query("SELECT f FROM Field f WHERE lower(f.name) = lower(:name)")
    Optional<Field> alreadyCreated(@Param("name") String name);
}