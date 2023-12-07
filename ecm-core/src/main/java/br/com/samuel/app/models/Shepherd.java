package br.com.samuel.app.models;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;
import jakarta.validation.Valid;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import lombok.Getter;
import lombok.Setter;

@Entity
@Getter
@Setter
@Table(name = "shepherd")
public class Shepherd extends EntityBase {
    
    @NotBlank(message = "{shepherd.name.notblank}")
    @Size(min = 6, max = 32, message = "{shepherd.name.size}")
    @Column(length = 32, nullable = false)
    private String name;

    @NotBlank(message = "{shepherd.location.notblank}")
    @Size(min = 2, max = 24, message = "{shepherd.location.size}")
    @Column(length = 24, nullable = false)
    private String location;

    @Valid
    @JoinColumn(name = "signature_id")
    @OneToOne(cascade = CascadeType.ALL)
    private ImageModel signature;
}