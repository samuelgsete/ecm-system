package br.com.samuel.app.repository;

import java.util.Optional;
import java.util.Set;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import br.com.samuel.app.models.Member;

@Repository
public interface MemberRepository extends JpaRepository<Member, String> {

    @Query("SELECT m FROM Member m WHERE m.id = :id")
    Optional<Member> findById(@Param("id") String id);

    // Listar membros filtrando pela congregação
    @Query("SELECT m FROM Member m WHERE lower(m.congregation.name) = :congregation ORDER BY m.name ASC")
    Set<Member> listMembersByCongregation(@Param("congregation") String congregation);

    // Listar membros filtrando pelo cargo
    @Query("SELECT m FROM Member m WHERE m.role.name = :role ORDER BY m.name ASC")
    Set<Member> listMembersByRole(@Param("role") String role);

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

    // Lista os membros criado há mais tempo
    @Query("SELECT m FROM Member m WHERE LOWER(m.name) LIKE %:search% ORDER BY m.createdAt ASC")
    Page<Member> listPaginateOlder(@Param("search") String search, Pageable pageable);

    // Lista os membros criados recentemente
    @Query("SELECT m FROM Member m WHERE m.isSelected = TRUE ORDER BY m.name ASC")
    Set<Member> listAllSelecteds();

    // Retorna a quantidade de membros selecionados para impressão
    @Query("SELECT COUNT(m) FROM Member m WHERE m.isSelected = TRUE")
    Long countSelecteds();

    // Verifica se o membro já foi registrado
    @Query("SELECT m FROM Member m WHERE m.cpf = :cpf OR m.rg = :rg")
    Optional<Member> alreadyCreated(@Param("cpf") String cpf, @Param("rg") String rg);


    @Query("SELECT m FROM Member m WHERE MONTH(m.dateOfBirth) = :month AND lower(m.congregation.name) = :congregation ORDER BY DAY(m.dateOfBirth) ASC")
    Set<Member> listMembersByBirthday(@Param("month") Integer month, @Param("congregation") String congregation);
}