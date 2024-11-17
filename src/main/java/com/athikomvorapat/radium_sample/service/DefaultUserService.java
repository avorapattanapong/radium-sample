package com.athikomvorapat.radium_sample.service;

import com.athikomvorapat.radium_sample.domain.User;
import com.athikomvorapat.radium_sample.dto.UserDto;
import com.athikomvorapat.radium_sample.respository.UserRepository;
import java.text.DateFormat;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Optional;
import org.springframework.stereotype.Service;

@Service
public class DefaultUserService implements UserService {

  private final UserRepository userRepository;
  private final String dateOfBirthFormat = "yyyy-MM-dd";

  public DefaultUserService(UserRepository userRepository) {
    this.userRepository = userRepository;
  }

  @Override
  public UserDto getUser(long id) {
    Optional<User> userOptional = userRepository.findById(id);
    if (userOptional.isEmpty()) {
      throw new UserNotFoundException("User for id " + id + " not found");
    }

    Date dateOfBirth = userOptional.get().getDateOfBirth();
    DateFormat dateFormat = new SimpleDateFormat(dateOfBirthFormat);
    User user = userOptional.get();
    return UserDto.builder()
        .id(user.getId())
        .name(user.getName())
        .dateOfBirth(dateFormat.format(dateOfBirth))
        .createdOn(Date.from(user.getCreatedOn()))
        .build();
  }

  @Override
  public UserDto createUser(UserDto user) {
    DateFormat dateFormat = new SimpleDateFormat(dateOfBirthFormat);
    try {
      Date dateOfBirth = dateFormat.parse(user.getDateOfBirth());
      User newUser = User.builder()
          .name(user.getName())
          .dateOfBirth(dateOfBirth)
          .build();

      User savedUser = userRepository.save(newUser);
      user.setId(savedUser.getId());
      user.setCreatedOn(Date.from(savedUser.getCreatedOn()));
      return user;
    } catch (ParseException e) {
      throw new InvalidArgumentException("Invalid date format", "dateOfBirth");
    }
  }

  @Override
  public List<UserDto> getUsers() {
    List<User> users = userRepository.findAll();
    DateFormat dateFormat = new SimpleDateFormat(dateOfBirthFormat);
    List<UserDto> userDtoList = new ArrayList<>();
    users.forEach(user -> {
      userDtoList.add(UserDto.builder()
          .id(user.getId())
          .name(user.getName())
          .dateOfBirth(dateFormat.format(user.getDateOfBirth()))
          .createdOn(Date.from(user.getCreatedOn()))
          .build());
    });

    return userDtoList;
  }

  @Override
  public UserDto updateUser(UserDto user) {
    Optional<User> existingUser = userRepository.findById(user.getId());
    if(existingUser.isEmpty()) {
      throw new UserNotFoundException("User for id " + user.getId() + " not found");
    }

    DateFormat dateFormat = new SimpleDateFormat(dateOfBirthFormat);
    try {
      User updatedUser = existingUser.get();
      updatedUser.setName(user.getName());
      updatedUser.setDateOfBirth(dateFormat.parse(user.getDateOfBirth()));

      User savedUser = userRepository.save(updatedUser);
      return UserDto.builder()
          .id(savedUser.getId())
          .name(savedUser.getName())
          .dateOfBirth(dateFormat.format(savedUser.getDateOfBirth()))
          .createdOn(Date.from(savedUser.getCreatedOn()))
          .build();
    } catch (ParseException e) {
      throw new InvalidArgumentException("Invalid date format", "dateOfBirth");
    }
  }

  @Override
  public void deleteUser(long id) {
    Optional<User> user = userRepository.findById(id);
    if(user.isEmpty()) {
      throw new UserNotFoundException("User for id " + id + " not found");
    }

    userRepository.deleteById(id);
  }

}
