package br.com.samuel.app.models;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;
import lombok.AllArgsConstructor;

@Getter
@Setter
@ToString
@AllArgsConstructor
public class Church {
    
    private String nameShepherd;
    private String urlSignatureShepherd;
    private String urlLogo;
}