package br.com.samuel.app.models;

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
    
    private String name;
    private String template;
    private Boolean isActive;
}