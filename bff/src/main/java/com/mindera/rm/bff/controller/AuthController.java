package com.mindera.rm.bff.controller;

import com.mindera.rm.bff.dto.auth.LoginUserDTO;
import com.mindera.rm.bff.dto.auth.UserDetailsDTO;
import com.mindera.rm.bff.service.AuthService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor

public class AuthController {

    private final AuthService authService;

    @PostMapping("/login")
    public ResponseEntity<UserDetailsDTO> checkCredentials(@RequestBody LoginUserDTO dto){
        return ResponseEntity.ok(authService.checkCredentials(dto));
    }

    @PostMapping("/register")
    public ResponseEntity<UserDetailsDTO> register(@RequestBody LoginUserDTO dto){
        return ResponseEntity.ok(authService.register(dto));
    }
}
