package br.com.samuel.app.models;

import java.time.LocalDateTime;
import jakarta.persistence.Column;
import jakarta.persistence.Id;
import jakarta.persistence.MappedSuperclass;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@MappedSuperclass
public abstract class EntityBase {

    @Id
    @Column(length = 6)
    protected String id;

    @Column(name = "created_at", columnDefinition = "TIMESTAMP")
    private LocalDateTime createdAt = LocalDateTime.now();

    @Column(name = "updated_at", columnDefinition = "TIMESTAMP")
    private LocalDateTime updatedAt = LocalDateTime.now();

    public void toUpdated() {
        updatedAt = LocalDateTime.now();
    }

    public void toCreated() {
        createdAt = LocalDateTime.now();
        updatedAt = LocalDateTime.now();
    }
}