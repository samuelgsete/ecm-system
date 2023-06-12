package br.com.samuel.app.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import br.com.samuel.app.models.ImageModel;

@Repository
public interface ImageModelRepository extends JpaRepository<ImageModel, Integer> {

    @Query("SELECT i FROM ImageModel i WHERE i.publicId = :publicId")
    Optional<ImageModel> findByPublicId(@Param("publicId") String publicId);
}