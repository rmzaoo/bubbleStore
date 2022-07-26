package com.mindera.rm.bff.service;

import com.mindera.rm.bff.converter.AuthConverter;
import com.mindera.rm.bff.dto.auth.LoginUserDTO;
import com.mindera.rm.bff.dto.auth.UserDetailsDTO;
import com.mindera.rm.bff.exception.exceptions.InvalidCredentialsException;
import com.mindera.rm.bff.persistance.entity.User;
import com.mindera.rm.bff.persistance.repository.AuthRepository;
import lombok.RequiredArgsConstructor;
import lombok.SneakyThrows;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
@RequiredArgsConstructor
public class AuthService {

    private final AuthConverter converter;
    private final AuthRepository authRepository;

    @SneakyThrows
    public UserDetailsDTO checkCredentials(LoginUserDTO dto) {

        Optional<User> userEntity = authRepository.findByUsername(dto.getUsername());

        if (userEntity.isPresent()) {
            User user = userEntity.get();

            if (user.getPassword().equals(dto.getPassword())) {
                return converter.convertToUserDetailsDto(user);
            } else {
                throw new InvalidCredentialsException("Invalid credentials");
            }


        }

        throw new InvalidCredentialsException("Invalid credentials");
    }

    public UserDetailsDTO register(LoginUserDTO dto) {
        User user = converter.convertLoginToUserEntity(dto);
        authRepository.save(user);
        return converter.convertToUserDetailsDto(user);
    }
}
