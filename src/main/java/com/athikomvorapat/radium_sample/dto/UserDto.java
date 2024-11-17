package com.athikomvorapat.radium_sample.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import jakarta.validation.constraints.NotEmpty;
import java.util.Date;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;

@AllArgsConstructor
@Data
@Builder
public class UserDto {

  private Long id;

  @NotEmpty
  private String name;

  @NotEmpty
  @JsonProperty("date_of_birth")
  private String dateOfBirth;

  @JsonProperty("created_on")
  private Date createdOn;

}
