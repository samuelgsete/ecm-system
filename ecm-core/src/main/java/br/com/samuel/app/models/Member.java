package br.com.samuel.app.models;

import java.time.Duration;
import java.time.LocalDateTime;
import java.util.Objects;
import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.Setter;
import br.com.samuel.app.models.enums.Gender;
import br.com.samuel.app.models.enums.MaritalStatus;
import br.com.samuel.app.models.enums.Status;

@Entity
@Getter
@Setter
@Table(name = "members")
public class Member extends EntityBase {
    
    private String name;
    private String cpf;
    private String rg;
    private LocalDateTime dateOfBirth;
    private LocalDateTime dateOfBaptism;
    private String phone;
    private String email;
    private Boolean isSelected = false;

    @Enumerated(EnumType.ORDINAL)
    private MaritalStatus maritalStatus;

    @Enumerated(EnumType.ORDINAL)
    private Gender gender;

    @Enumerated(EnumType.ORDINAL)
    private Status status = Status.MEMBER;

    @JoinColumn(name = "affiliation_id")
    @OneToOne(cascade = CascadeType.ALL)
    private Affiliation affiliation;

    @ManyToOne
    @JoinColumn(name = "role_id")
    private Role role;

    @ManyToOne
    @JoinColumn(name = "congregation_id")
    private Congregation congregation;

    @JoinColumn(name = "photo_id")
    @OneToOne(cascade = CascadeType.ALL)
    private ImageModel photo;

    @JoinColumn(name = "signature_id")
    @OneToOne(cascade = CascadeType.ALL)
    private ImageModel signature;

    public Long getAge() {
        return Duration.between(dateOfBirth, LocalDateTime.now()).toDays() / 365L;
    }

    public boolean equals(Object o) {
        if(this == o) return true;
        if(o == null || getClass() != o.getClass()) return false;
        Member member = (Member) o;
        return Objects.equals(id, member.getId()) && Objects.equals(cpf, member.getCpf());
    }
}