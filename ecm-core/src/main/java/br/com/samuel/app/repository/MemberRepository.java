package br.com.samuel.app.repository;

import java.util.Set;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import br.com.samuel.app.models.Member;

@Repository
public interface MemberRepository extends JpaRepository<Member, Integer> {

    // Lista os membros de maneira paginada filtrando pleo nome
    @Query("SELECT m FROM Member m WHERE LOWER(m.name) LIKE %:search% ORDER BY m.name ASC")
    Page<Member> listPaginate(@Param("search") String search, Pageable pageable);  
 
    // Lista os membros criados recentemente
    @Query("SELECT m FROM Member m WHERE LOWER(m.name) LIKE %:search% ORDER BY m.createdAt DESC")
    Page<Member> listLatest(@Param("search") String search, Pageable pageable);

    // Lista os membros criados recentemente
    @Query("SELECT m FROM Member m WHERE m.isSelected = TRUE ORDER BY m.name ASC")
    Page<Member> listSelecteds(@Param("search") String search, Pageable pageable);

    // Lista os membros criados recentemente
    @Query("SELECT m FROM Member m WHERE m.isSelected = TRUE ORDER BY m.name ASC")
    Set<Member> listSelecteds();
}