package br.com.samuel.app.repository;

import java.util.Optional;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import br.com.samuel.app.models.Role;

@Repository
public interface RoleRepository extends JpaRepository<Role, Integer> {

     @Query("SELECT r FROM Role r WHERE r.id = :id")
    Optional<Role> findById(@Param("id") String id);

    // Lista os cargos 'roles' de maneira paginada filtrando pelo nome do cargo
    @Query("SELECT r FROM Role r WHERE LOWER(r.name) LIKE %:search% ORDER BY r.name ASC")
    Page<Role> listPaginate(@Param("search") String search, Pageable pageable);  

    // Lista os cargos 'roles' em ordem descrescente de nome
    @Query("SELECT r FROM Role r WHERE LOWER(r.name) LIKE %:search% ORDER BY r.name DESC")
    Page<Role> listPaginateByNameDesc(@Param("search") String search, Pageable pageable);  

    // Lista os cargos 'roles' criados recentemente
    @Query("SELECT r FROM Role r WHERE LOWER(r.name) LIKE %:search% ORDER BY r.createdAt DESC")
    Page<Role> listPaginateLatestCreated(@Param("search") String search, Pageable pageable); 

    // Lista os cargos 'roles' mais antigos
    @Query("SELECT r FROM Role r WHERE LOWER(r.name) LIKE %:search% ORDER BY r.createdAt ASC")
    Page<Role> listPaginateOlder(@Param("search") String search, Pageable pageable); 

    // Lista os cargos 'roles' atualizados recentamente
    @Query("SELECT r FROM Role r WHERE LOWER(r.name) LIKE %:search% ORDER BY r.updatedAt DESC")
    Page<Role> listPaginateLatestUpdated(@Param("search") String search, Pageable pageable); 

    @Query("SELECT r FROM Role r WHERE lower(r.name) = lower(:name)")
    Optional<Role> alreadyCreated(@Param("name") String name);
}