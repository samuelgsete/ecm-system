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

    // Lista os membros de maneira paginada filtrando pelo nome
    @Query("SELECT m FROM Member m WHERE LOWER(m.name) LIKE %:search% ORDER BY m.name ASC")
    Page<Member> listPaginate(@Param("search") String search, Pageable pageable);

    // Lista os membros ordenando pelo nome decrescente
    @Query("SELECT m FROM Member m WHERE LOWER(m.name) LIKE %:search% ORDER BY m.name DESC")
    Page<Member> listPaginateByNameDesc(@Param("search") String search, Pageable pageable);
 
    // Lista os membros criados recentemente
    @Query("SELECT m FROM Member m WHERE LOWER(m.name) LIKE %:search% ORDER BY m.createdAt DESC")
    Page<Member> listPaginateLatestCreated(@Param("search") String search, Pageable pageable);

    // Lista os membros atualizados recentemente
    @Query("SELECT m FROM Member m WHERE LOWER(m.name) LIKE %:search% ORDER BY m.updatedAt DESC")
    Page<Member> listPaginateLatestUpdated(@Param("search") String search, Pageable pageable);

    // Lista os membros de maior idade
    @Query("SELECT m FROM Member m WHERE LOWER(m.name) LIKE %:search% ORDER BY m.dateOfBirth DESC")
    Page<Member> listPaginateOlderAge(@Param("search") String search, Pageable pageable);

     // Lista os membros de menor idade
    @Query("SELECT m FROM Member m WHERE LOWER(m.name) LIKE %:search% ORDER BY m.dateOfBirth ASC")
    Page<Member> listPaginateMinorAge(@Param("search") String search, Pageable pageable);

    // Lista os membros criado há mais tempo
    @Query("SELECT m FROM Member m WHERE LOWER(m.name) LIKE %:search% ORDER BY m.createdAt ASC")
    Page<Member> listPaginateOlder(@Param("search") String search, Pageable pageable);

    // Lista os membros criados recentemente
    @Query("SELECT m FROM Member m WHERE m.isSelected = TRUE ORDER BY m.name ASC")
    Set<Member> listSelecteds();
}