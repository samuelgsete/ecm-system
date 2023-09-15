package br.com.samuel.app.models;

import jakarta.persistence.Entity;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.Setter;

@Entity
@Getter
@Setter
@Table(name = "images_model")
public class ImageModel extends EntityBase {
    
    private String name;
    private String publicId;
    private String url;
    private Integer width;
    private Integer height;
    private Long size;
    private String format;
    private String uploadedAt;
}