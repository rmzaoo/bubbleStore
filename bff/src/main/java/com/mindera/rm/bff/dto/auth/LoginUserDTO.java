package com.mindera.rm.bff.dto.auth;

import lombok.Builder;
import lombok.Data;

import javax.persistence.Column;

@Builder
@Data
public class LoginUserDTO {

    private String username;
    private String password;
}
