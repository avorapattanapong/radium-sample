package com.athikomvorapat.radium_sample.respository;

import com.athikomvorapat.radium_sample.domain.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {

}
