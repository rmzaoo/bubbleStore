package com.mindera.rm.bff.dto.auth;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class UserDetailsDTO {

    private Long Id;
    private String username;
}
