package br.com.samuel.app.usecases.uploads;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
public class Cropped {
    
    private Integer width;
    private Integer height;
    private Integer positionX1;
    private Integer positionY2;
}