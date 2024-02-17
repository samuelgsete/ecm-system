package br.com.samuel.app.repository;

import java.util.Optional;
import java.util.Set;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import br.com.samuel.app.models.Congregation;

@Repository
public interface CongregationRepository extends JpaRepository<Congregation, String> {

    @Query("SELECT c FROM Congregation c WHERE c.id = :id")
    Optional<Congregation> findById(@Param("id") String id);
    
    // Lista as congregações filtrando pelo nome
    @Query("SELECT c FROM Congregation c WHERE LOWER(c.name) LIKE %:search% ORDER BY c.name ASC")
    Page<Congregation> listPaginate(@Param("search") String search, Pageable pageable);  
 
    // Lista as congregações ordenando pelo nome decrescente
    @Query("SELECT c FROM Congregation c WHERE LOWER(c.name) LIKE %:search% ORDER BY c.name DESC")
    Page<Congregation> listPaginateByNameDesc(@Param("search") String search, Pageable pageable); 

    // Lista as congregações mais recentemente criadas
    @Query("SELECT c FROM Congregation c WHERE LOWER(c.name) LIKE %:search% ORDER BY c.createdAt DESC")
    Page<Congregation> listPaginateLatestCreated(@Param("search") String search, Pageable pageable); 

     // Lista as congregações menos recentemente criadas
    @Query("SELECT c FROM Congregation c WHERE LOWER(c.name) LIKE %:search% ORDER BY c.createdAt ASC")
    Page<Congregation> listPaginateOlderCreated(@Param("search") String search, Pageable pageable); 

    // Lista as congregações mais recentemente atualizadas
    @Query("SELECT c FROM Congregation c WHERE LOWER(c.name) LIKE %:search% ORDER BY c.updatedAt DESC")
    Page<Congregation> listPaginateLatestUpdated(@Param("search") String search, Pageable pageable);

    @Query("SELECT c FROM Congregation c WHERE lower(c.name) = lower(:name)")
    Optional<Congregation> alreadyCreated(@Param("name") String name);

    @Query("SELECT c FROM Congregation c WHERE c.isSelected =  TRUE")
    Set<Congregation> listAllSelecteds();

    // Retorna a quantidade de congregações selecionadas
    @Query("SELECT COUNT(c) FROM Congregation c WHERE c.isSelected = TRUE")
    Integer countSelecteds();
}