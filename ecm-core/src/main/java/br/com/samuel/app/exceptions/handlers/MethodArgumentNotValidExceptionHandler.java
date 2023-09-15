package br.com.samuel.app.exceptions.handlers;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

@ControllerAdvice
public class MethodArgumentNotValidExceptionHandler {

    @ExceptionHandler(MethodArgumentNotValidException.class)
    public ResponseEntity<ResponseError> handle(MethodArgumentNotValidException ex) {
        var messageError = ex.getAllErrors()
            .stream()
            .map(error -> error.getDefaultMessage())
            .findFirst()
            .get();

        var error = new ResponseError(HttpStatus.BAD_REQUEST.value(), messageError);
        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(error);
    }
}