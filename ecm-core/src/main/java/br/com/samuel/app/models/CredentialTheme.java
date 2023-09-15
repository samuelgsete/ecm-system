package br.com.samuel.app.models;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "credential_themes")
public class CredentialTheme extends EntityBase {
    
    @Column(length = 24, nullable = false)
    private String name;

    @Column(length = 24, nullable = false)
    private String template;

     @Column(nullable = false)
    private Boolean isActive;
}