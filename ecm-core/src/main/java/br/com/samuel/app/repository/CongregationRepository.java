package br.com.samuel.app.repository;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import br.com.samuel.app.models.Congregation;

@Repository
public interface CongregationRepository extends JpaRepository<Congregation, Integer> {
    
    // Lista as congregações filtrando pelo nome
    @Query("SELECT c FROM Congregation c WHERE LOWER(c.name) LIKE %:search% ORDER BY c.name ASC")
    Page<Congregation> listPaginate(@Param("search") String search, Pageable pageable);  
 
    // Lista as congregações mais recentemente criadas
    @Query("SELECT c FROM Congregation c WHERE LOWER(c.name) LIKE %:search% ORDER BY c.createdAt DESC")
    Page<Congregation> listLatest(@Param("search") String search, Pageable pageable); 
}