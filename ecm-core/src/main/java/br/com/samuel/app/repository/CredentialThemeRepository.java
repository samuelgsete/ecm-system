package br.com.samuel.app.repository;

import java.util.Optional;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import br.com.samuel.app.models.CredentialTheme;

@Repository
public interface CredentialThemeRepository extends JpaRepository<CredentialTheme, Integer> {
    
  // Busca o tema cadastrado como principal
  @Query("SELECT t FROM CredentialTheme t WHERE t.isMain = true")
  Optional<CredentialTheme> findOneThemeByIsMain();

   // Lista os temas pelo nome em ordem crescente
  @Query("SELECT t FROM CredentialTheme t WHERE LOWER(t.name) LIKE %:search% ORDER BY t.name ASC")
  Page<CredentialTheme> listPaginateByNameAsc(@Param("search") String search, Pageable pageable);

  // Lista os temas pelo nome em ordem decrescente
  @Query("SELECT t FROM CredentialTheme t WHERE LOWER(t.name) LIKE %:search% ORDER BY t.name DESC")
  Page<CredentialTheme> listPaginateByNameDesc(@Param("search") String search, Pageable pageable);
}