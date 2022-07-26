package com.mindera.rm.bff.exception.model;

import lombok.Builder;
import lombok.Data;

@Builder
@Data
public class InvalidCredentials {
    private String message;
    private String exception;
    private String path;

}
