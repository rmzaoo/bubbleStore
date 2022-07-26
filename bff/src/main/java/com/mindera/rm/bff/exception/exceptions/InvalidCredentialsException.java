package com.mindera.rm.bff.exception.exceptions;

import com.mindera.rm.bff.exception.BffException;

public class InvalidCredentialsException extends BffException {
    public InvalidCredentialsException(String message) {
        super(message);
    }
}
