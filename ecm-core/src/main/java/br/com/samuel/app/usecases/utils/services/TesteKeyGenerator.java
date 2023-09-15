package br.com.samuel.app.usecases.utils.services;

public class TesteKeyGenerator {
    public static void main(String[] args) {
        PrimaryKeyGenerator keyGenerator = new PrimaryKeyGenerator();
        for(int i = 1; i < 20; i++) {
            System.out.println(keyGenerator.run());
        }
    }
}