package br.com.samuel.app.usecases.metrics;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class Metric {
    
    private String icon;
    private String name;
    private Long value;
}