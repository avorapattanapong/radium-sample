package com.athikomvorapat.radium_sample.service;

import com.athikomvorapat.radium_sample.dto.UserDto;
import java.util.List;

public interface UserService {

  UserDto getUser(long id);

  UserDto createUser(UserDto user);

  List<UserDto> getUsers();

  UserDto updateUser(UserDto user);

  void deleteUser(long id);
}
