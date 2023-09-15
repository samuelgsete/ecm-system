package br.com.samuel.app.usecases.utils.services;

import java.util.Random;
import org.springframework.stereotype.Service;

@Service
public class PrimaryKeyGenerator {
    
    public String run() {
        String letters[] = { "A", "E", "L", "N", "B", "U", "G", "H", "D", "F", "R" };
        Random random = new Random();
        var d1 = random.nextInt(10);
        var d2 = random.nextInt(10);
        var d3 = random.nextInt(10);
        var d4 = random.nextInt(10);
        var d5 = letters[random.nextInt(10)];
        var d6 = random.nextInt(10);
        String key = d1 + "" + d2 + "" + d3 + "" + d4 + "" + d5 + "" + d6;
        return key;
    }
}