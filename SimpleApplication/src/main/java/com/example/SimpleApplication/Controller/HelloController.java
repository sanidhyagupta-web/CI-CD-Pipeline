package com.example.SimpleApplication.Controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HelloController {

    @GetMapping("/greet")
    public ResponseEntity<String> greetme(){
        return new ResponseEntity<>("Hello World", HttpStatus.OK);
    }
}
