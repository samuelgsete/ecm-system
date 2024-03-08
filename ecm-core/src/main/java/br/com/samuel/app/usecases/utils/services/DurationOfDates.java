package br.com.samuel.app.usecases.utils.services;

import java.time.Duration;
import java.time.LocalDateTime;
import org.springframework.stereotype.Service;

@Service
public class DurationOfDates {

    private long MAX_DAYS_ON_MONTH = 30;
    private long MAX_DAYS_ON_YEAR = 365;

    public String run(LocalDateTime date) {
        var today = LocalDateTime.now();
        var duration = Duration.between(date, today);
        var result = "";

        if(duration.toDays() < MAX_DAYS_ON_MONTH) {
            var days = duration.toDays();
            result = days <= 1 ?  "há 1 dia" : "há " + days + " dias";      
            return result;
        }

        else if(duration.toDays() > MAX_DAYS_ON_MONTH && duration.toDays() < MAX_DAYS_ON_YEAR) {
            var months = duration.toDays() / 12L;
            result = months <= 1 ? "há 1 mês" : "há " + months + " meses";    
            return result;
        }

        else if(duration.toDays() > 365) {
            var years = duration.toDays() / 365L;
            result = years <= 1 ? "há 1 ano" : "há " + years + " anos";
            return result;
        }
        return result;
    }
}