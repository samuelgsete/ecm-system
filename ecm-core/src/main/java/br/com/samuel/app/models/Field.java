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
@Table(name = "fields")
public class Field extends EntityBase {
    
    @NotBlank(message = "{field.name.notblank}")
    @Size(min = 2, max = 24, message ="{field.name.size}")
    @Column(length = 24, nullable = false)
    private String name;

    @JoinColumn(name = "logo_id")
    @OneToOne(cascade = CascadeType.ALL)
    private ImageModel logo;

    @JoinColumn(name = "shepherd_id")
    @OneToOne(cascade = CascadeType.ALL)
    private Shepherd shepherd;
}