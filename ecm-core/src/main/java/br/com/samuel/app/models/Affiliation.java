package br.com.samuel.app.models;

import jakarta.persistence.Entity;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.Setter;

@Entity
@Getter
@Setter
@Table(name = "affiliations")
public class Affiliation extends EntityBase {
    
    private String fatherName;
    private String motherName;
}