package br.com.samuel.app.usecases.utils.TextFormatter;

import org.springframework.stereotype.Service;
import br.com.samuel.app.models.enums.Gender;
import br.com.samuel.app.models.enums.MaritalStatus;

@Service
public class MaritalStatusFormatter {
    public String run(MaritalStatus maritalStatus, Gender gender) {
        switch(maritalStatus) {
            case MARRIED:
                if(gender == Gender.MALE) return "Casado";
                else if(gender == Gender.FEMALE) return "Casada";
                break;

            case SINGLE:
                if(gender == Gender.MALE) return "Solteiro";
                else if(gender == Gender.FEMALE) return "Solteira";
            break;

            case WINDOWER:
                if(gender == Gender.MALE) return "Viúvo";
                else if(gender == Gender.FEMALE) return "Viúva";
            break;

            case DIVORCED:
                if(gender == Gender.MALE) return "Divorciado";
                else if(gender == Gender.FEMALE) return "Divorciada";
            break;

            default: return "Solteiro(a)";
        }
        return "Solteiro(a)";
    }
}