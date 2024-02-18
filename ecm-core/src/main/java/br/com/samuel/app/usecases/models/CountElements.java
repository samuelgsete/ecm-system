package br.com.samuel.app.usecases.models;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class CountElements {

    private Long totalElements;
    private Long totalSelected;
    private Boolean everyoneIsSelected;
    private Boolean notEveryoneIsSelected;

    public CountElements(Long _totalElements, Long _totalSelected) {
        totalElements = _totalElements;
        totalSelected = _totalSelected;
        everyoneIsSelected = totalElements == totalSelected;
        notEveryoneIsSelected = (totalElements != totalSelected) && (totalSelected != 0);
    }
}