package br.com.samuel.app.resources.hello;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("hello")
public class HelloController {
    
    @GetMapping
    public ResponseEntity<String> welcome() {
        var message = "Hi, welcome to My App :)";
        return ResponseEntity.ok(message);
    }
}