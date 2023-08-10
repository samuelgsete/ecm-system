package br.com.samuel.app.security;

public abstract class Authority {
    public static final String ADMIN = "hasAuthority('CLIENT_ADMIN')";
    public static final String USER = "hasAuthority('CLIENT_USER')"; 
}