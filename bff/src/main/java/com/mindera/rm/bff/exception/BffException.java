package com.mindera.rm.bff.exception;

public abstract class BffException extends RuntimeException {

    public BffException() {
    }

    public BffException(String message) {
        super(message);
    }

    public BffException(String message, Throwable cause) {
        super(message, cause);
    }


}
