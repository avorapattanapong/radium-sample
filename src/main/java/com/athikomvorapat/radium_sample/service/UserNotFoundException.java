package com.athikomvorapat.radium_sample.service;

public class UserNotFoundException extends UserServiceException {

  public UserNotFoundException(String message) {
    super(message);
  }

  public UserNotFoundException(String message, Throwable cause) {
    super(message, cause);
  }

}
