package br.com.samuel.app.models;

import java.util.HashSet;
import java.util.Set;
import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.Setter;

@Entity
@Getter
@Setter
@Table(name = "congregations")
public class Congregation extends EntityBase {
    
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
}