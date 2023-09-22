package br.com.samuel.app.models;

import java.util.HashSet;
import java.util.Objects;
import java.util.Set;
import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import lombok.Getter;
import lombok.Setter;

@Entity
@Getter
@Setter
@Table(name = "congregations")
public class Congregation extends EntityBase {
    
    @NotBlank(message = "{congregation.name.notblank}")
    @Size(min = 2, max = 24, message ="{congregation.name.size}")
    @Column(length = 24, nullable = false)
    private String name;
   
    @JsonIgnore
    @OneToMany(mappedBy = "congregation", cascade = CascadeType.ALL)
    private Set<Member> members = new HashSet<Member>();

    public void addMember(Member member) {
        member.setCongregation(this);
        members.add(member);
    }

    public Integer getNumberOfMembers() {
        return members.size();
    }

    public boolean equals(Object o) {
        if(this == o) return true;
        if(o == null || getClass() != o.getClass()) return false;
        Congregation congregation = (Congregation) o;
        return Objects.equals(
            id, congregation.getId()) && 
            Objects.equals(name.toLowerCase(), congregation.getName().toLowerCase()
        );
    }
}