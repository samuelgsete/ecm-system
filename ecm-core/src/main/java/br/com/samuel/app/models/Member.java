package br.com.samuel.app.models;

import java.time.Duration;
import java.time.LocalDateTime;
import java.util.Objects;
import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;
import jakarta.validation.Valid;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import lombok.Getter;
import lombok.Setter;
import br.com.samuel.app.models.enums.Gender;
import br.com.samuel.app.models.enums.MaritalStatus;

@Entity
@Getter
@Setter
@Table(name = "members")
public class Member extends EntityBase {
    
    @NotBlank(message = "{member.name.notblank}")
    @Size(min = 6, max = 48, message = "{member.name.size}")
    @Column(length = 48, nullable = false)
    private String name;

    @Size(max = 11, message = "{member.cpf.size}")
    @Column(length = 11)
    private String cpf;

    @Size(max = 15, message = "{member.rg.size}")
    @Column(length = 15)
    private String rg;

    @NotNull(message = "{member.dateofbirth.notnull}")
    @Column(nullable = false)
    private LocalDateTime dateOfBirth;

    @NotNull(message = "{member.dateofbaptism.notnull}")
    @Column(nullable = false)
    private LocalDateTime dateOfBaptism;

    @Size(max = 11, message = "{member.phone.size}")
    @Column(length = 11)
    private String phone;

    @Email(message = "{member.email.valid}")
    @Size(max = 48, message = "{member.email.size}")
    @Column(length = 48)
    private String email;

    private Boolean isSelected = false;

    @NotNull(message = "{member.maritalstatus.notnull}")
    @Column(nullable = false)
    @Enumerated(EnumType.ORDINAL)
    private MaritalStatus maritalStatus;

    @NotNull(message = "{member.gender.notnull}")
    @Column(nullable = false)
    @Enumerated(EnumType.ORDINAL)
    private Gender gender;

    @Valid
    @JoinColumn(name = "affiliation_id")
    @OneToOne(cascade = CascadeType.ALL)
    private Affiliation affiliation;

    @Valid
    @ManyToOne
    @JoinColumn(name = "role_id")
    private Role role;

    @Valid
    @ManyToOne
    @JoinColumn(name = "congregation_id")
    private Congregation congregation;

    @Valid
    @JoinColumn(name = "photo_id")
    @OneToOne(cascade = CascadeType.ALL)
    private ImageModel photo;

    @Valid
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