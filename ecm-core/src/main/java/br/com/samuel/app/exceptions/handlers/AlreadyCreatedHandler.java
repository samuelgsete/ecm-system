package br.com.samuel.app.exceptions.handlers;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

import br.com.samuel.app.exceptions.AlreadyCreatedException;

@ControllerAdvice
public class AlreadyCreatedHandler {

    @ExceptionHandler(AlreadyCreatedException.class)
    public ResponseEntity<ResponseError> handle(AlreadyCreatedException ex) {
        var error = new ResponseError(HttpStatus.BAD_REQUEST.value(), ex.getMessage());
        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(error);
    }
}