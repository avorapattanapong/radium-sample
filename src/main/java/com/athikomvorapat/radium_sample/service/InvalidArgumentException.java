package com.athikomvorapat.radium_sample.service;

import lombok.Data;
import lombok.EqualsAndHashCode;

@EqualsAndHashCode(callSuper = true)
@Data
public class InvalidArgumentException extends RuntimeException {

  private String target;
  public InvalidArgumentException(String message, String target) {
    super(message);
    this.target = target;
  }

}
