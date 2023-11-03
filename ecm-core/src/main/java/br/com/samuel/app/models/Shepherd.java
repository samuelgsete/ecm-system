package br.com.samuel.app.models;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
@Table(name = "shepherds")
public class Shepherd extends EntityBase {
    
    @NotBlank(message = "{shepherd.name.notblank}")
    @Size(min = 2, max = 32, message ="{shepherd.name.size}")
    @Column(length = 32, nullable = false)
    private String name;

    @JoinColumn(name = "signature_id")
    @OneToOne(cascade = CascadeType.ALL)
    private ImageModel signature;
}