package com.mindera.rm.bff.converter;

import com.mindera.rm.bff.dto.auth.LoginUserDTO;
import com.mindera.rm.bff.dto.auth.UserDetailsDTO;
import com.mindera.rm.bff.persistance.entity.User;
import org.springframework.stereotype.Component;

@Component
public final class AuthConverter {

    public UserDetailsDTO convertToUserDetailsDto(User dto) {
        return UserDetailsDTO.builder()
                .Id(dto.getId())
                .username(dto.getUsername())
                .build();
    }

    public User convertLoginToUserEntity(LoginUserDTO dto) {
        return User.builder()
                .username(dto.getUsername())
                .password(dto.getPassword())
                .build();

    }
}
