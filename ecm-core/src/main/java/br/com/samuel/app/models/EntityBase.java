package br.com.samuel.app.models;

import java.time.LocalDateTime;
import java.util.Random;
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

    public void generatePrimaryKey() {
        String letters[] = { "A", "E", "L", "N", "B", "U", "G", "H", "D", "F", "R" };
        Random random = new Random();
        var d1 = random.nextInt(10);
        var d2 = random.nextInt(10);
        var d3 = random.nextInt(10);
        var d4 = random.nextInt(10);
        var d5 = letters[random.nextInt(10)];
        var d6 = random.nextInt(10);
        String key = d1 + "" + d2 + "" + d3 + "" + d4 + "" + d5 + "" + d6;
        id = key;
    }
}