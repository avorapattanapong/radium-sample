package com.athikomvorapat.radium_sample.controller;

import com.athikomvorapat.radium_sample.dto.ApiCollectionResponse;
import com.athikomvorapat.radium_sample.dto.UserDto;
import com.athikomvorapat.radium_sample.service.UserService;
import java.util.List;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/users")
@CrossOrigin(origins="*")
public class UserController {

  private final UserService userService;

  public UserController(UserService userService) {
    this.userService = userService;
  }

  @RequestMapping(method = RequestMethod.GET)
  public ApiCollectionResponse<UserDto> getUser() {
    List<UserDto> users = userService.getUsers();

    return ApiCollectionResponse.<UserDto>builder()
        .total(users.size())
        .data(users)
        .build();
  }

  @RequestMapping(method = RequestMethod.GET, value = "/{id}")
  public UserDto getUser(@PathVariable long id) {
    return userService.getUser(id);
  }

  @RequestMapping(method = RequestMethod.POST)
  @ResponseStatus(HttpStatus.CREATED)
  public UserDto createUser(@RequestBody UserDto user) {
    return userService.createUser(user);
  }

  @RequestMapping(method = RequestMethod.PUT)
  public UserDto updateUser(@RequestBody UserDto user) {
    return userService.updateUser(user);
  }

  @ResponseStatus(HttpStatus.NO_CONTENT)
  @RequestMapping(method = RequestMethod.DELETE, value = "/{id}")
  public void deleteUser(@PathVariable long id) {
    userService.deleteUser(id);
  }
}
