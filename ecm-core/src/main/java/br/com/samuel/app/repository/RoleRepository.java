package br.com.samuel.app.repository;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import br.com.samuel.app.models.Role;

@Repository
public interface RoleRepository extends JpaRepository<Role, Integer> {

    // Lista os cargos 'roles' de maneira paginada filtrando pleo nome do cargo
    @Query("SELECT r FROM Role r WHERE LOWER(r.name) LIKE %:search% ORDER BY r.name ASC")
    Page<Role> listPaginate(@Param("search") String search, Pageable pageable);  

    // Lista os cargos 'roles' criados recentemente
    @Query("SELECT r FROM Role r WHERE LOWER(r.name) LIKE %:search% ORDER BY r.createdAt DESC")
    Page<Role> listLatest(@Param("search") String search, Pageable pageable); 
}