package br.com.samuel.app.models;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Table;
import jakarta.validation.constraints.Size;
import lombok.Getter;
import lombok.Setter;

@Entity
@Getter
@Setter
@Table(name = "affiliations")
public class Affiliation extends EntityBase {

    @Size(min = 6, max = 32, message = "{affiliation.fathername.size}")
    @Column(length = 32)
    private String fatherName;

    @Size(min = 6, max = 32, message = "{affiliation.mothername.size}")
    @Column(length = 32)
    private String motherName;
}