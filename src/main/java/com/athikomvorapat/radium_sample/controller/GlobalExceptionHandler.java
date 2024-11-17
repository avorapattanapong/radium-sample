package com.athikomvorapat.radium_sample.controller;

import com.athikomvorapat.radium_sample.service.InvalidArgumentException;
import com.athikomvorapat.radium_sample.service.UserNotFoundException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.context.request.WebRequest;

@ControllerAdvice
public class GlobalExceptionHandler {
  @ExceptionHandler(UserNotFoundException.class)
  public ResponseEntity<?> handleUserNotFoundException(UserNotFoundException ex, WebRequest request) {
    ErrorDetails errorDetails = ErrorDetails.builder()
        .message(ex.getMessage())
        .build();
    return new ResponseEntity<>(errorDetails, HttpStatus.NOT_FOUND);
  }

  @ExceptionHandler(InvalidArgumentException.class)
  public ResponseEntity<?> handleInvalidUserException(InvalidArgumentException ex, WebRequest request) {
    ErrorDetails errorDetails = ErrorDetails.builder()
        .message(ex.getMessage())
        .target(ex.getTarget())
        .build();
    return new ResponseEntity<>(errorDetails, HttpStatus.BAD_REQUEST);
  }

  @ExceptionHandler(Exception.class)
  public ResponseEntity<?> handleGlobalException(Exception ex, WebRequest request) {
    ErrorDetails errorDetails = ErrorDetails.builder()
        .message(ex.getMessage())
        .build();
    return new ResponseEntity<>(errorDetails, HttpStatus.INTERNAL_SERVER_ERROR);
  }

}
