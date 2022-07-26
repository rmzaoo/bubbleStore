package com.mindera.rm.bff.exception.handler;

import com.mindera.rm.bff.exception.exceptions.InvalidCredentialsException;
import com.mindera.rm.bff.exception.model.InvalidCredentials;
import lombok.extern.slf4j.Slf4j;
import org.springframework.core.Ordered;
import org.springframework.core.annotation.Order;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;

import javax.servlet.http.HttpServletRequest;

@Order(Ordered.HIGHEST_PRECEDENCE)
@ControllerAdvice
@Slf4j
public class InvalidCredentialsHandler extends ResponseEntityExceptionHandler {

    @ExceptionHandler(value = {InvalidCredentialsException.class})
    public ResponseEntity<InvalidCredentials> invalidCredentialsException(HttpServletRequest request, Exception ex) {
        InvalidCredentials invalidCredentials = InvalidCredentials.builder()
                .message(ex.getMessage())
                .exception(ex.getClass().getSimpleName())
                .path(request.getRequestURI())
                .build();

        log.error("Invalid credentials exception: {}", ex.getMessage());

        return new ResponseEntity<>(invalidCredentials, new HttpHeaders(), HttpStatus.UNAUTHORIZED);
    }
}
