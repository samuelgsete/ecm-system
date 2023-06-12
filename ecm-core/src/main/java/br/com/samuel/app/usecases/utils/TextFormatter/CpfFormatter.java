package br.com.samuel.app.usecases.utils.TextFormatter;

import org.springframework.stereotype.Service;

@Service
public class CpfFormatter {
    public String run(String cpf) {
        if(cpf.length() != 11) return cpf;
        var result = cpf.substring(0,3) + "." + cpf.substring(3,6) + "." + cpf.substring(6,9) + "-" + cpf.substring(9,11);
        return result;
    }
}